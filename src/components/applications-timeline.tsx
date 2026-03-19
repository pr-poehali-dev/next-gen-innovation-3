import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Начало: Базовый уровень (A1–A2)",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            С нуля до уверенного общения за 2 месяца. Изучаете 500 самых нужных слов, базовые времена и строите
            первые предложения — без страха ошибок.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фонетика и произношение с первого урока
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              500+ слов для повседневного общения
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Present Simple, Past Simple, Future — навсегда
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Прорыв: Средний уровень (B1–B2)",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Переходите от «понимаю» к «говорю свободно». Работа с аутентичными материалами: фильмы, подкасты,
            новости — учитесь думать на английском, а не переводить.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2000+ слов и идиоматические выражения
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Разговорные клубы с носителями языка
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Деловая переписка и презентации
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Мастерство: Продвинутый уровень (C1–C2)",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Уровень носителя: академическое письмо, сложная аргументация, нюансы культуры. Подготовка к IELTS,
            TOEFL и профессиональным сертификатам Cambridge.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Академическое письмо и эссе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Подготовка к IELTS 7.0+ и TOEFL 100+
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Переговоры, публичные выступления, нетворкинг
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Ваш путь к английскому</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Чёткая траектория от нуля до свободного владения — каждый этап с конкретными результатами
            и измеримым прогрессом.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}