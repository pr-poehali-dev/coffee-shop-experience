import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "PackageCheck",
    title: "Широкий ассортимент",
    desc: "Мебель, пищеблоки, спортинвентарь, интерактивные доски, медкабинеты, системы безопасности и многое другое.",
  },
  {
    icon: "Wrench",
    title: "Под ключ",
    desc: "Берём на себя проект, поставку, монтаж, пусконаладку и обучение персонала — вы получаете готовый результат.",
  },
  {
    icon: "ShieldCheck",
    title: "Соответствие нормам",
    desc: "Всё оборудование соответствует санитарным нормам, ГОСТ и требованиям государственных стандартов.",
  },
  {
    icon: "Landmark",
    title: "Тендеры и госзакупки",
    desc: "Работаем по любым формам расчётов, участвуем в тендерах и государственных закупках.",
  },
];

export default function Featured() {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/9b96cfb5-0ad8-4d30-b4e9-0fa4a9678277/files/e92f7c9a-d479-4f4d-a36f-a09a79598ffe.jpg"
          alt="Оборудование для детского сада"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему именно «Малевич»</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-medium">
          Создаём комфортную, безопасную и развивающую среду для детей и учащихся — с многолетним опытом работы с муниципальными заказчиками.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {advantages.map((item) => (
            <div key={item.title} className="flex gap-3 items-start">
              <div className="mt-1 shrink-0">
                <Icon name={item.icon} size={20} className="text-neutral-800" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Запросить предложение
        </button>
      </div>
    </div>
  );
}
