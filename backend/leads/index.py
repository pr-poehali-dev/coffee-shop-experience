import json
import os
import smtplib
import psycopg2
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


NOTIFY_EMAIL = "malevich_school@yandex.ru"
SMTP_HOST = "smtp.yandex.ru"
SMTP_PORT = 465


def send_notification(name: str, phone: str, email: str, organization: str, message: str):
    """Отправляет уведомление о новой заявке на почту."""
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта — {name}"
    msg["From"] = NOTIFY_EMAIL
    msg["To"] = NOTIFY_EMAIL

    lines = [
        f"<b>Имя:</b> {name}",
        f"<b>Телефон:</b> {phone}",
    ]
    if email:
        lines.append(f"<b>Email:</b> {email}")
    if organization:
        lines.append(f"<b>Учреждение:</b> {organization}")
    if message:
        lines.append(f"<b>Сообщение:</b> {message}")

    html = "<html><body>" + "<br>".join(lines) + "</body></html>"
    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(NOTIFY_EMAIL, os.environ["SMTP_PASSWORD"])
        server.sendmail(NOTIFY_EMAIL, NOTIFY_EMAIL, msg.as_string())


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта, сохраняет в БД и отправляет уведомление на почту."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    if event.get("httpMethod") != "POST":
        return {
            "statusCode": 405,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Method not allowed"}),
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    email = body.get("email", "").strip()
    organization = body.get("organization", "").strip()
    message = body.get("message", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Имя и телефон обязательны"}),
        }

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO leads (name, phone, email, organization, message) VALUES (%s, %s, %s, %s, %s) RETURNING id",
        (name, phone, email or None, organization or None, message or None),
    )
    lead_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    send_notification(name, phone, email, organization, message)

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"success": True, "id": lead_id}),
    }
