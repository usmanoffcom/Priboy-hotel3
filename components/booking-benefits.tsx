import { Shield, Percent, Gift, Clock } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const benefits = [
  {
    icon: Percent,
    title: "Лучшая цена",
    description: "Гарантируем самую низкую цену при бронировании напрямую на сайте",
  },
  {
    icon: Gift,
    title: "Бонусы гостям",
    description: "Бесплатный доступ к бассейну и приветственный напиток",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Защищённое соединение и безопасная обработка платежей",
  },
  {
    icon: Clock,
    title: "Гибкие условия",
    description: "При отмене более чем за 10 дней — возврат 50%",
  },
]

export function BookingBenefits() {
  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <SectionHeader
          title="Преимущества прямого бронирования"
          centered
          className="mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 glass-light rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="font-medium text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
