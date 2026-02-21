import { useState } from "react";
import Icon from "@/components/ui/icon";

const LEADS_URL = "https://functions.poehali.dev/03a57fd8-c9b0-4be5-94a7-fee034860f26";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", organization: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(LEADS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", organization: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-neutral-950 px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Связаться с нами</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Получите коммерческое предложение
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mb-10">
            Оставьте заявку — мы свяжемся с вами в течение рабочего дня, изучим потребности вашего учреждения и подготовим индивидуальное предложение.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Icon name="Phone" size={18} className="text-neutral-400 shrink-0" />
              <a href="tel:+79519308448" className="text-white hover:text-neutral-300 transition-colors">+7 (951) 930-84-48</a>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Mail" size={18} className="text-neutral-400 shrink-0" />
              <a href="mailto:malevich-school@yandex.ru" className="text-white hover:text-neutral-300 transition-colors">malevich-school@yandex.ru</a>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="MapPin" size={18} className="text-neutral-400 shrink-0 mt-0.5" />
              <span className="text-white">г. Екатеринбург, ул. Латвийская 56/3</span>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Truck" size={18} className="text-neutral-400 shrink-0 mt-0.5" />
              <span className="text-neutral-300 text-sm">Собственная доставка по всему УрФО</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Ваше имя *"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Телефон *"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <input
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Название учреждения"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Опишите задачу или вопрос"
            className="bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors resize-none"
          />

          {status === "success" && (
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <Icon name="CheckCircle" size={16} />
              Заявка отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <Icon name="AlertCircle" size={16} />
              Ошибка отправки. Пожалуйста, попробуйте ещё раз или позвоните нам.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-neutral-200 transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed w-fit"
          >
            {status === "loading" ? "Отправляю..." : "Отправить заявку"}
          </button>
        </form>
      </div>
    </div>
  );
}