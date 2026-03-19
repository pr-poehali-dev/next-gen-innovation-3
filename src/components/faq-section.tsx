import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "С какого уровня можно начинать?",
      answer:
        "Абсолютно с любого — хоть с нуля. После регистрации проходите бесплатный тест из 20 вопросов, и система автоматически определит ваш уровень и подберёт программу.",
    },
    {
      question: "Сколько времени нужно уделять в день?",
      answer:
        "Минимум 20–30 минут в день достаточно для стабильного прогресса. ИИ адаптирует нагрузку под ваш график — можно заниматься и по 10 минут, но чаще.",
    },
    {
      question: "Как быстро будут видны результаты?",
      answer:
        "Первые заметные результаты — уже через 3–4 недели: словарный запас вырастет, начнёте понимать речь на слух. К концу 2-го месяца большинство учеников переходят на новый уровень.",
    },
    {
      question: "Есть ли живые преподаватели или только ИИ?",
      answer:
        "Оба варианта. Основной курс — ИИ с мгновенной обратной связью. На уровнях B1+ доступны разговорные клубы с носителями языка и сессии с преподавателями по запросу.",
    },
    {
      question: "Помогает ли платформа готовиться к IELTS и TOEFL?",
      answer:
        "Да, есть отдельные треки подготовки к IELTS, TOEFL и Cambridge. Разбор реальных заданий прошлых лет, стратегии по каждому разделу и пробные тесты с оценкой.",
    },
    {
      question: "Можно ли заниматься с телефона?",
      answer:
        "Да, приложение доступно на iOS и Android. Все уроки синхронизируются между устройствами — начинаете на компьютере, продолжаете в транспорте.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать об English AI — обучении, результатах и технологии.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}