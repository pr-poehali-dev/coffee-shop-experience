import Icon from "@/components/ui/icon";

const categories = [
  {
    icon: "Armchair",
    title: "Мебель",
    desc: "Детская и подростковая, офисная, игровые и учебные зоны",
    bg: "bg-neutral-100",
  },
  {
    icon: "UtensilsCrossed",
    title: "Пищеблоки",
    desc: "Профессиональное кухонное оборудование, посуда, инвентарь",
    bg: "bg-stone-100",
    img: "https://cdn.poehali.dev/projects/9b96cfb5-0ad8-4d30-b4e9-0fa4a9678277/files/3383cd64-0629-4205-bd08-2fc2d301b163.jpg",
  },
  {
    icon: "Dumbbell",
    title: "Спорт",
    desc: "Тренажёры, инвентарь для залов и площадок, секционное оборудование",
    bg: "bg-zinc-100",
    img: "https://cdn.poehali.dev/projects/9b96cfb5-0ad8-4d30-b4e9-0fa4a9678277/files/a487fc15-d188-4b52-8bd4-9044b771d97e.jpg",
  },
  {
    icon: "Monitor",
    title: "Учебные классы",
    desc: "Интерактивные доски, проекторы, компьютеры, лабораторное оборудование",
    bg: "bg-neutral-100",
    img: "https://cdn.poehali.dev/projects/9b96cfb5-0ad8-4d30-b4e9-0fa4a9678277/files/ca16214f-f2ea-4755-9312-069daa7eb9f7.jpg",
  },
  {
    icon: "Gamepad2",
    title: "Игровые зоны",
    desc: "Детские площадки, развивающие игры, конструкторы, мягкие модули",
    bg: "bg-stone-100",
    img: "https://cdn.poehali.dev/projects/9b96cfb5-0ad8-4d30-b4e9-0fa4a9678277/files/e92f7c9a-d479-4f4d-a36f-a09a79598ffe.jpg",
  },
  {
    icon: "ShieldPlus",
    title: "Безопасность и медицина",
    desc: "Видеонаблюдение, пожарная сигнализация, медкабинеты, сантехника",
    bg: "bg-zinc-100",
  },
];

export default function Categories() {
  return (
    <div id="services" className="bg-white px-6 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Что мы поставляем</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-14 leading-tight max-w-xl">
          Полный спектр оснащения для вашего учреждения
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`relative overflow-hidden rounded-none group cursor-default ${cat.bg} hover:bg-neutral-900 transition-colors duration-300`}
            >
              {cat.img && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-300 group-hover:scale-105 transform transition-transform"
                  />
                </div>
              )}
              {!cat.img && <div className="h-48 bg-neutral-200 group-hover:bg-neutral-800 transition-colors duration-300" />}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name={cat.icon} size={18} className="text-neutral-700 group-hover:text-white transition-colors duration-300" />
                  <h3 className="font-semibold text-neutral-900 group-hover:text-white transition-colors duration-300 text-base uppercase tracking-wide">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
