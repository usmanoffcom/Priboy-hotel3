import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text, Lead, Muted, Small } from "@/components/ui/text"
import { PageHero } from "@/components/ui/page-hero"
import { SectionHeader } from "@/components/ui/section-header"
import { AppLink, TelLink } from "@/components/ui/app-link"
import { Phone, MapPin, Waves, UtensilsCrossed, Car, Users, Star, Dumbbell, Scissors } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "О гостинице Прибой в Лазаревском — бассейн, парк аттракционов, отзывы",
  description: "Гостиница Прибой в Лазаревском, Сочи. Комфортабельные номера, открытый бассейн, собственный пляж у самого моря, парк аттракционов с колесом обозрения, рестораны, тренажерный зал, барбершоп. Отзывы гостей, фото, история отеля.",
  alternates: {
    canonical: "https://priboy1.ru/o-komplekse",
  },
  openGraph: {
    title: "О гостинице Прибой в Лазаревском — бассейн, парк аттракционов",
    description: "Гостиница Прибой в Лазаревском: комфортабельные номера, бассейн, пляж у самого моря, парк аттракционов, рестораны, тренажерный зал. Отзывы, фото, история.",
    url: "https://priboy1.ru/o-komplekse",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "О комплексе Гостиница Прибой",
      },
    ],
    type: "website",
  },
}

const testimonials = [
  {
    name: "Максим К",
    level: "Знаток города 24 уровня",
    text: "Отличное месторасположение. Первая линия на самом берегу моря. Всё,что указано на сайте соответствует. В отеле и номере чистота и порядок. Приветливый персонал. Шикарный вид из окна. Были не в сезон и поэтому не купались в бассейне. Рядом кафе, парк, набережная. В номере есть всё для прекрасного отдыха. Спасибо Сергею (служба безопасности) за помощь в организации стоянки автомобиля. Большое спасибо Веронике с ресепшн,которая организовала отдых на 5+. Это Сотрудник с большой буквы. Она не смотрит на одежды, машины и всякую мешуру для нее все гости должны быть обеспечены отдыхом на 5+. Также выражаю большую благодарность Ларисе,которая содержит в чистоте и порядке весь 2 этаж. Мне показалось,что у неё есть шапка невидимка. Её не видно,но в номере всегда чистота и порядок. Всему персоналу большой поклон за ваш труд благодаря которому люди получают незабываемый отдых.",
  },
  {
    name: "Юлия Е",
    level: "Знаток города 5 уровня",
    text: "Никогда никому не писала отзывы но тут прям очень хочется ! Отель замечательный ! Прямо на берегу моря . Пляж хороший , с множеством водных развлечений . Девочки на ресепшн очень приветливые .Номер хороший ,есть все, что нужно -белоснежные полотенца и постель, туалетные принадлежности и т.п…Шведский стол отличный ! А ещё здесь тёплый бассейн - это очень классно! У нас номер 224 с видом на парк и горы . Здесь жизнь прям «кипит» -это здОрово ! Магазины, столовые, все в шаговой доступности . Вечером можно посидеть и полюбоваться морем прям на берегу в удобных креслах- грушах или на качелях . Отдельное спасибо прекрасной женщине Ларисе, очень рада знакомству ! В общем , очень рекомендую ! Нахожусь ещё здесь но уже планирую приехать сюда на следующий год !)",
  },
  {
    name: "Василий Григоренко",
    level: "Знаток города 21 уровня",
    text: "Лично мне гостиница понравилась. Большие, уютные номера со всей необходимой мебелью, кондиционером, телевизором и санузлом. Вид на море с балкона потрясающий. Предусмотренные на балконе стулья и стол позволяют проживающим провести вечер за чашкой кофе, сидя на балконе и любуясь великолепным закатом. Завтрак по системе \" шведский стол \", включённый в стоимость проживания- это очень удобно, а главное вкусно, сытно и довольно разнообразно. В гостинице есть лифт. Правда, маленький, но этот работяга чрезвычайно нужен и полезен в особенности для живущих на верхних этажах. Помимо вышеуказанного в гостинице есть бассейн на втором этаже. Небольшой, но чистый. Шезлонги вокруг него тоже присутствуют. Кстати, с территории бассейна открывается вид на знаменитое колесо обозрения Лазаревского. Персонал вежливый, приветливый.",
  },
]

const faqs = [
  {
    question: "Как я могу забронировать номер в вашем отеле?",
    answer: "Вы можете сделать бронирование напрямую через наш веб-сайт или связавшись с нашей командой по бронированию по телефону или электронной почте. Мы также принимаем бронирования через сторонние платформы бронирования.",
    contacts: "8 800 250 00 34, +7 (862) 270-45-07",
  },
  {
    question: "Каковы ваши правила отмены бронирования?",
    answer: "cancel-link",
  },
  {
    question: "Что входит в стоимость – только завтраки?",
    answer: "В стоимость проживания включены завтраки с 02.05.2026 по 01.10.2026. Также включены: доступ к бассейну неограничен (бассейн работает с 01.05 по 01.10), лежаки и полотенца у бассейна бесплатно, ежедневная уборка, полотенца, тапочки, косметический набор.",
  },
  {
    question: "Какие типы номеров вы предлагаете?",
    answer: "Мы предлагаем 5 категорий номеров: Стандарт, Стандарт+, Студия, Полулюкс и Luxe. Все номера элегантные и современные, различных категорий.",
  },
  {
    question: "Вы предлагает трансфер от аэропорта из Адлера?",
    answer: "Да, мы можем организовать трансфер от аэропорта Сочи (Адлер). Пожалуйста, свяжитесь с нами заранее для бронирования трансфера.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Наш отель"
          title={<>О комплексе «Прибой»<br />в Лазаревское, Сочи</>}
          description="При планировании отпуска в Сочи обязательно позаботьтесь о выборе места для проживания, поскольку хороший отель – это залог приятного и спокойного отдыха. На данный момент среди всех гостей региона большей популярностью пользуются именно отели, расположенные вблизи поселка Лазаревское."
        />

        {/* Main Content */}
        <section className="site-section bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <Heading level="h2" size="section" weight="medium" className="mb-6">Отель Прибой</Heading>
              <Text size="lg" tone="muted" className="mb-6">
                Отель Прибой расположен в сердце курорта Лазаревское и предлагает элегантные и современные номера различных категорий. На территории отеля находится открытый бассейн, тренажерный зал, барбершоп.
              </Text>
              <Text size="lg" tone="muted" className="mb-6">
                Парк с аттракционами для больших и самых маленьких, пляж с собственным причалом для швартовки пассажирских судов, ресторан, два банкетных зала, столовые и мангальные, где наши талантливые повара проведут вас по гастрономическим разным стран и континентов. Все это и многое другое вы найдете в нашем гостеприимном комплексе по имени Прибой. Прибой — один из крупнейших отелей поселка Лазаревское.
              </Text>
              <Text size="lg" tone="muted" className="mb-6">
                Гостиница, расположенная в центре поселка, утопает в вековой зелени парка на самом берегу моря. – это прекрасное место для проведения романтических выходных, Вашего отпуска и деловых встреч.
              </Text>
              <Text size="lg" tone="muted">
                Мы очень надеемся, что Вы оцените наши старания и гостеприимство и всегда будем рады видеть Вас среди наших постоянных Гостей!
              </Text>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="site-section site-section-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Видео" title="Видео о гостинице Прибой" centered className="mb-8" />
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://vk.com/video_ext.php?oid=-31885820&id=456239038"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                title="Видео о гостинице Прибой"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="site-section site-section-muted">
          <div className="site-container">
            <SectionHeader eyebrow="Инфраструктура" title="Наши преимущества" centered className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Star, title: "Качество", description: "Высокий уровень сервиса" },
                { icon: Users, title: "Комфортабельные номера", description: "Элегантные и современные" },
                { icon: Waves, title: "Открытый бассейн", description: "На территории отеля" },
                { icon: Dumbbell, title: "Тренажерный зал", description: "Для активного отдыха" },
                { icon: Scissors, title: "Барбершоп", description: "Услуги для гостей" },
                { icon: UtensilsCrossed, title: "Ресторан", description: "Два банкетных зала" },
                { icon: Car, title: "Парк аттракционов", description: "Для больших и маленьких" },
                { icon: MapPin, title: "Пляж с причалом", description: "Собственный причал" },
              ].map((feature, index) => (
                <div key={index} className="site-card bg-white p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 glass-light rounded-full">
                    <feature.icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <Heading level="h3" size="small" weight="semibold" className="mb-2">{feature.title}</Heading>
                  <Small tone="muted">{feature.description}</Small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="site-section bg-white">
          <div className="site-container">
            <SectionHeader eyebrow="Отзывы" title="Что о нас говорят" centered className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="site-card bg-cream p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Small tone="muted" className="line-clamp-6 mb-4">
                    {testimonial.text}
                  </Small>
                  <div className="pt-4 border-t border-border">
                    <Text size="sm" weight="semibold">{testimonial.name}</Text>
                    <Small tone="muted">{testimonial.level}</Small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="site-section site-section-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="FAQ" title="Часто Задаваемые Вопросы" centered className="mb-12" />
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="site-card bg-white p-6">
                  <Heading level="h3" size="small" weight="semibold" className="mb-3">{faq.question}</Heading>
                  <Muted className="mb-2">
                    {faq.answer === "cancel-link" ? (
                      <>
                        Подробную информацию о правилах отмены бронирования вы можете найти на странице{" "}
                        <AppLink href="/otmena-bronirovaniya" tone="accent">
                          «Отмена бронирования»
                        </AppLink>
                        .
                      </>
                    ) : faq.answer}
                  </Muted>
                  {"contacts" in faq && faq.contacts && (
                    <Text size="sm" tone="accent" weight="medium" className="mt-2">{faq.contacts}</Text>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="site-section bg-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-terracotta/20" />
          <div className="site-container relative z-10 text-center">
            <div className="glass rounded-2xl border border-white/10 p-8 sm:p-12 max-w-3xl mx-auto">
              <Heading level="h2" size="section" weight="medium" tone="inverse" className="mb-6">Готовы забронировать номер?</Heading>
              <Lead tone="inverse" className="opacity-90 mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для бронирования или получите консультацию по телефону
              </Lead>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="brand" size="xl">
                  <Link href="/booking">Забронировать номер</Link>
                </Button>
                <TelLink 
                  phone="+7 (862) 270-45-07" 
                  tone="inverse" 
                  className="flex items-center gap-2 text-lg"
                >
                  <Phone className="h-5 w-5" />
                  +7 (862) 270-45-07
                </TelLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
