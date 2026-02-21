import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-2 sm:gap-3 mr-4">
                <a href="tel:+79519308448" className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors text-xs sm:text-sm">
                  <Icon name="Phone" size={14} className="text-neutral-400 shrink-0" />
                  +7 (951) 930-84-48
                </a>
                <a href="mailto:malevich_school@yandex.ru" className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors text-xs sm:text-sm">
                  <Icon name="Mail" size={14} className="text-neutral-400 shrink-0" />
                  malevich_school@yandex.ru
                </a>
                <div className="flex items-start gap-2 text-white text-xs sm:text-sm">
                  <Icon name="MapPin" size={14} className="text-neutral-400 shrink-0 mt-0.5" />
                  г. Екатеринбург, ул. Латвийская 56/3
                </div>
                <div className="flex items-start gap-2 text-neutral-400 text-xs">
                  <Icon name="Truck" size={14} className="text-neutral-400 shrink-0 mt-0.5" />
                  Собственная доставка по УрФО
                </div>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Компания</h3>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Услуги
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Оснащение</h3>
                <a
                  href="#"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Детские сады
                </a>
                <a
                  href="#"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Школы
                </a>
                <a
                  href="#"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Пищеблоки
                </a>
                <a
                  href="#"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Спортзалы
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                МАЛЕВИЧ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Малевич</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}