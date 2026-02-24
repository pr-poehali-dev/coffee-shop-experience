import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Armchair",
    title: "Мебель",
    items: ["Детская и подростковая мебель", "Офисная мебель", "Игровые зоны и учебные пространства"],
  },
  {
    icon: "UtensilsCrossed",
    title: "Пищеблоки",
    items: ["Профессиональное кухонное оборудование", "Посуда и столовые принадлежности", "Комплексное оснащение столовых"],
  },
  {
    icon: "Dumbbell",
    title: "Спорт",
    items: ["Тренажёры и спортивный инвентарь", "Оборудование спортзалов", "Оснащение спортивных площадок"],
  },
  {
    icon: "Monitor",
    title: "Учебные классы",
    items: ["Интерактивные доски и проекторы", "Компьютерное оборудование", "Лабораторное оснащение"],
  },
  {
    icon: "Blocks",
    title: "Игровые зоны",
    items: ["Детские игровые площадки", "Развивающие игры и конструкторы", "Мягкие игровые модули"],
  },
  {
    icon: "ShieldCheck",
    title: "Безопасность и медицина",
    items: ["Видеонаблюдение и охранные системы", "Пожарная сигнализация", "Медицинские кабинеты и оснащение"],
  },
];

const advantages = [
  {
    icon: "Package",
    title: "Широкий ассортимент",
    desc: "Мебель, пищеблоки, спортивный инвентарь, интерактивные доски, медицинские кабинеты, системы безопасности — всё в одном месте.",
  },
  {
    icon: "KeyRound",
    title: "Поставки «под ключ»",
    desc: "Берём на себя проектирование, поставку, монтаж, пусконаладку и обучение персонала — объект сдаётся готовым к работе.",
  },
  {
    icon: "BadgeCheck",
    title: "Соответствие нормам",
    desc: "Всё оборудование соответствует санитарным нормам, ГОСТу и требованиям государственных регуляторов.",
  },
  {
    icon: "Building2",
    title: "Опыт госзакупок",
    desc: "Работаем со всеми формами оплаты, участвуем в тендерах и сопровождаем процедуры государственных закупок.",
  },
];

export default function Proposal() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen font-[Montserrat,system-ui,sans-serif]">

      {/* Print button */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-700 transition-colors"
        >
          <Icon name="Printer" size={16} />
          Распечатать / PDF
        </button>
        <a
          href="/"
          className="flex items-center gap-2 border border-neutral-300 text-neutral-700 px-4 py-2 text-sm hover:bg-neutral-50 transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          На сайт
        </a>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-12 print:py-6 print:px-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-12 pb-8 border-b-2 border-neutral-900">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-1">МАЛЕВИЧ</h1>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">Оснащение учебных учреждений</p>
          </div>
          <div className="text-right text-sm text-neutral-500 mt-2 leading-relaxed">
            <p className="font-medium text-neutral-900">+7 (951) 930-84-48</p>
            <p>malevich-school@yandex.ru</p>
            <p>г. Екатеринбург, ул. Латвийская 56/3</p>
          </div>
        </div>

        {/* Title block */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Коммерческое предложение</p>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Комплексное оснащение детских садов<br />и школ «под ключ»
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed max-w-2xl">
            Компания «Малевич» — надёжный поставщик оборудования и мебели для образовательных учреждений Уральского федерального округа. Мы создаём комфортную, безопасную и развивающую среду для детей и учеников, берём на себя весь цикл работ — от проекта до сдачи объекта.
          </p>
        </div>

        {/* Advantages */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Почему выбирают нас</h3>
          <div className="grid grid-cols-2 gap-5">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex gap-4 p-5 bg-neutral-50 border border-neutral-100">
                <div className="shrink-0 w-9 h-9 bg-neutral-900 flex items-center justify-center">
                  <Icon name={adv.icon} size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{adv.title}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Направления оснащения</h3>
          <div className="grid grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="border border-neutral-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name={s.icon} size={16} className="text-neutral-400" />
                  <p className="font-semibold text-sm">{s.title}</p>
                </div>
                <ul className="flex flex-col gap-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-neutral-500 flex gap-1.5 items-start">
                      <span className="mt-1.5 w-1 h-1 bg-neutral-300 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Этапы работы</h3>
          <div className="flex gap-0">
            {[
              { n: "01", title: "Заявка", desc: "Обсуждаем задачу и потребности вашего учреждения" },
              { n: "02", title: "Проект", desc: "Разрабатываем спецификацию и коммерческое предложение" },
              { n: "03", title: "Поставка", desc: "Подбираем оборудование и доставляем по всему УрФО" },
              { n: "04", title: "Монтаж", desc: "Устанавливаем, настраиваем, обучаем персонал" },
            ].map((step, i, arr) => (
              <div key={step.n} className={`flex-1 p-4 border-t-2 border-neutral-900 ${i < arr.length - 1 ? "border-r border-r-neutral-200" : ""}`}>
                <p className="text-2xl font-bold text-neutral-200 mb-2">{step.n}</p>
                <p className="font-semibold text-sm mb-1">{step.title}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target clients */}
        <div className="mb-12 p-6 bg-neutral-900 text-white">
          <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Работаем с учреждениями</h3>
          <div className="flex flex-wrap gap-2">
            {["Детские сады", "Общеобразовательные школы", "Гимназии и лицеи", "Коррекционные школы", "Учреждения доп. образования", "Пришкольные лагеря", "Спортивные школы", "Муниципальные заказчики"].map((tag) => (
              <span key={tag} className="border border-neutral-600 text-neutral-300 text-xs px-3 py-1">{tag}</span>
            ))}
          </div>
        </div>

        {/* CTA / Footer */}
        <div className="flex items-end justify-between pt-8 border-t-2 border-neutral-900">
          <div>
            <p className="text-lg font-bold mb-1">Готовы обсудить ваш проект?</p>
            <p className="text-sm text-neutral-500">Оставьте заявку — подготовим индивидуальное предложение в течение рабочего дня.</p>
          </div>
          <div className="text-right shrink-0 ml-8">
            <p className="font-bold text-base">+7 (951) 930-84-48</p>
            <p className="text-sm text-neutral-500">malevich-school@yandex.ru</p>
            <p className="text-xs text-neutral-400 mt-1">Собственная доставка по УрФО</p>
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          @page { margin: 12mm; size: A4; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}