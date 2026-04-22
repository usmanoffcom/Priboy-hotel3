import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text, Muted, Small } from "@/components/ui/text"
import { PageHero } from "@/components/ui/page-hero"
import { TelLink, EmailLink } from "@/components/ui/app-link"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "События и мероприятия в гостинице Прибой — банкетные залы, организация праздников | Лазаревское",
  description: "События и мероприятия в гостинице Прибой в Лазаревском: тематические вечера, концерты, детские программы, семейные праздники. Организация корпоративных мероприятий, свадеб, юбилеев. Два банкетных зала, рестораны, мангальная зона.",
  alternates: {
    canonical: "https://priboy1.ru/events",
  },
  openGraph: {
    title: "События и мероприятия в гостинице Прибой — банкетные залы",
    description: "Организация мероприятий в гостинице Прибой: свадьбы, корпоративы, юбилеи, детские праздники. Два банкетных зала, рестораны, мангальная зона. Бронирование.",
    url: "https://priboy1.ru/events",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "События и анонсы в гостинице Прибой",
      },
    ],
    type: "website",
  },
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="События"
          title="События и анонсы"
          description="В нашем комплексе периодически проходят различные мероприятия и события, связанные с отелем в Лазаревском. У нас лучшие программы на побережье."
        />

        {/* Main Content */}
        <section className="site-section bg-white">
          <div className="site-container">
            <div className="prose prose-lg max-w-none mb-12">
              <Text size="lg" tone="muted">
                Гостиница Прибой регулярно организует разнообразные мероприятия и события для наших гостей. От тематических вечеров и концертов до специальных программ для детей и семейных праздников — у нас всегда есть что-то интересное.
              </Text>
            </div>

            {/* Events Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Calendar className="h-8 w-8 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <Heading level="h3" size="small" weight="bold" className="mb-3">Регулярные мероприятия</Heading>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Тематические вечера и концерты</li>
                      <li>• Детские развлекательные программы</li>
                      <li>• Семейные праздники и конкурсы</li>
                      <li>• Кулинарные мастер-классы</li>
                      <li>• Спортивные мероприятия</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-cream-dark p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="h-8 w-8 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <Heading level="h3" size="small" weight="bold" className="mb-3">Специальные программы</Heading>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Новогодние и праздничные программы</li>
                      <li>• Сезонные фестивали</li>
                      <li>• Корпоративные мероприятия</li>
                      <li>• Свадебные торжества</li>
                      <li>• Юбилейные празднования</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Stay Updated */}
            <div className="bg-terracotta/10 p-8 sm:p-10 border-l-4 border-terracotta mb-12">
              <Heading level="h2" size="card" weight="bold" className="mb-4">Как узнать о предстоящих событиях?</Heading>
              <div className="space-y-4">
                <Muted>
                  Чтобы не пропустить интересные мероприятия, следите за нашими обновлениями:
                </Muted>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Проверяйте наш сайт и социальные сети</li>
                  <li>Уточняйте у администрации отеля при бронировании</li>
                  <li>Спрашивайте на ресепшене о текущих мероприятиях</li>
                  <li>Подписывайтесь на наши новостные рассылки</li>
                </ul>
              </div>
            </div>

            {/* Contact for Events */}
            <div className="bg-cream-dark p-8 sm:p-10 border border-border">
              <Heading level="h2" size="card" weight="bold" className="mb-6 text-center">
                Организация мероприятий
              </Heading>
              <Text tone="muted" className="text-center mb-8 max-w-2xl mx-auto">
                Хотите организовать мероприятие в нашем отеле? Мы поможем вам провести незабываемое событие с учетом всех ваших пожеланий.
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-terracotta mx-auto mb-3" />
                  <Heading level="h3" size="small" weight="semibold" className="mb-2">Место проведения</Heading>
                  <Small tone="muted">
                    Ресторан, терраса, конференц-зал, открытые площадки
                  </Small>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-terracotta mx-auto mb-3" />
                  <Heading level="h3" size="small" weight="semibold" className="mb-2">Вместимость</Heading>
                  <Small tone="muted">
                    От небольших встреч до крупных мероприятий
                  </Small>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-terracotta mx-auto mb-3" />
                  <Heading level="h3" size="small" weight="semibold" className="mb-2">Организация</Heading>
                  <Small tone="muted">
                    Полное сопровождение и помощь в организации
                  </Small>
                </div>
              </div>
              <div className="text-center mt-8">
                <Muted className="mb-4">
                  Свяжитесь с нами для обсуждения деталей:
                </Muted>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <TelLink phone="+7 (862) 270-45-07" tone="accent" className="text-lg font-medium" />
                  <Text as="span" tone="muted">или</Text>
                  <EmailLink email="priboy.sochi@mail.ru" tone="accent" className="font-medium" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-foreground text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Heading level="h2" size="section" tone="inverse" weight="bold" className="mb-6">
              Станьте частью наших событий
            </Heading>
            <Text size="lg" tone="inverse" className="mb-8 opacity-90">
              Забронируйте номер и присоединяйтесь к нашим мероприятиям
            </Text>
            <Button asChild size="xl" variant="brand">
              <Link href="/booking">Забронировать номер</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
