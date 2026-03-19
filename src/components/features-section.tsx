import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "ИИ-адаптация под вас",
    description: "Система анализирует ваш уровень и стиль обучения, автоматически подстраивая программу под ваши слабые места.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Живая речь с первого дня",
    description: "Практические диалоги и разговорные упражнения с реальными ситуациями — офис, путешествия, переговоры.",
    icon: "globe",
    badge: "Speaking",
  },
  {
    title: "Грамматика без боли",
    description: "Правила подаются через контекст и примеры, а не зубрёжку. Усваиваются естественно и надолго.",
    icon: "zap",
    badge: "Smart",
  },
  {
    title: "Vocabulary Builder",
    description: "Интервальное повторение слов по системе Leitner — запоминаете в 3 раза быстрее, забываете в 10 раз медленнее.",
    icon: "link",
    badge: "Memory",
  },
  {
    title: "Прогресс 24/7",
    description: "Дашборд с детальной аналитикой: сколько слов знаете, какие темы освоены, где нужна практика.",
    icon: "target",
    badge: "Трекинг",
  },
  {
    title: "Сертификация IELTS/TOEFL",
    description: "Специальные модули подготовки к международным экзаменам с разбором реальных заданий прошлых лет.",
    icon: "lock",
    badge: "Экзамен",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему English AI работает</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Научный подход и современные технологии — вместо скучных учебников и бесполезных упражнений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}