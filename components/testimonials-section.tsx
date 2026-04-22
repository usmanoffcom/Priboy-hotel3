import { Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

const testimonials = [
  {
    name: "Максим К",
    text: "Отличное месторасположение. Первая линия на самом берегу моря. Всё, что указано на сайте соответствует. В отеле и номере чистота и порядок. Приветливый персонал. Шикарный вид из окна. Рядом кафе, парк, набережная.",
    rating: 5,
    date: "2024",
    source: "Яндекс",
    link: "https://yandex.ru/maps/org/priboy/150446179571/reviews/?ll=39.323300%2C43.906100&z=17",
  },
  {
    name: "Юлия Е",
    text: "Отель замечательный! Прямо на берегу моря. Пляж хороший, с множеством водных развлечений. Девочки на ресепшн очень приветливые. Номер хороший, есть все, что нужно. Шведский стол отличный! А ещё здесь тёплый бассейн - это очень классно!",
    rating: 5,
    date: "2024",
    source: "Яндекс",
    link: "https://yandex.ru/maps/org/priboy/150446179571/reviews/?ll=39.323300%2C43.906100&z=17",
  },
  {
    name: "Василий Григоренко",
    text: "Лично мне гостиница понравилась. Большие, уютные номера со всей необходимой мебелью, кондиционером, телевизором и санузлом. Вид на море с балкона потрясающий. Завтрак по системе \"шведский стол\", включённый в стоимость проживания - это очень удобно, а главное вкусно, сытно и довольно разнообразно.",
    rating: 5,
    date: "2024",
    source: "Яндекс",
    link: "https://yandex.ru/maps/org/priboy/150446179571/reviews/?ll=39.323300%2C43.906100&z=17",
  },
]

export function TestimonialsSection() {
  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <SectionHeader
          eyebrow="Отзывы"
          title="Что о нас говорят"
          description="Наши гости высоко оценивают качество сервиса. Благодарим всех за оставленные отзывы!"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="site-card p-8 bg-cream">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground">{testimonial.date}</span>
              </div>
              <div className="text-xs text-muted-foreground">{testimonial.source}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base text-muted-foreground mb-6">
            Если вы были нашим гостем, не забывайте пожалуйста оставлять честный отзыв:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="brand-outline">
              <Link
                href="https://yandex.ru/maps/org/priboy/150446179571/reviews/?ll=39.323300%2C43.906100&z=17"
                target="_blank"
                rel="noopener noreferrer"
              >
                Отзывы на Яндекс
              </Link>
            </Button>
            <Button asChild variant="brand-outline">
              <Link
                href="https://2gis.ru/sochi/search/%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0%20%D0%BF%D1%80%D0%B8%D0%B1%D0%BE%D0%B9/filters/district_id%3D4222734536015873/firm/4222652931638599/39.326558%2C43.905646/tab/reviews"
                target="_blank"
                rel="noopener noreferrer"
              >
                Отзывы на 2ГИС
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
