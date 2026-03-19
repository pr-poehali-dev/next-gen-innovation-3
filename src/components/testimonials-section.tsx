import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анна Смирнова",
    role: "Менеджер проектов, 28 лет",
    avatar: "/professional-woman-scientist.png",
    content:
      "За 4 месяца с нуля до B1. Получила повышение — теперь веду переговоры с иностранными партнёрами на английском. English AI реально изменил мою карьеру.",
  },
  {
    name: "Дмитрий Орлов",
    role: "Разработчик ПО, 32 года",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Перешёл в международную компанию после 6 месяцев обучения. Система сама нашла мои слабые места и прокачала именно их. Никакой лишней воды.",
  },
  {
    name: "Мария Ли",
    role: "Студентка, 21 год",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Сдала IELTS на 7.5 с первого раза! Модуль подготовки к экзамену разобрал все задания, которые реально попались. Рекомендую всем, кто хочет учиться за рубежом.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Истории успеха</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные люди, реальные результаты — английский, который открывает двери
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}