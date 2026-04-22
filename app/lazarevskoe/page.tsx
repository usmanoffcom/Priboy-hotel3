import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text, Muted } from "@/components/ui/text"
import { AppLink } from "@/components/ui/app-link"
import { MapPin, Sun, Waves, Mountain, Users, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Лазаревское — семейный курорт на Черном море | Гостиница Прибой",
  description: "Лазаревское — популярный курорт для семейного отдыха в Большом Сочи. Пляжи, аквапарки, развлечения для детей, достопримечательности. Отдых в гостинице Прибой.",
  keywords: "Лазаревское, семейный отдых, Черное море, отдых с детьми, пляжи, аквапарки, Сочи",
  alternates: {
    canonical: "https://priboy1.ru/lazarevskoe",
  },
  openGraph: {
    title: "Лазаревское — семейный курорт на Черном море",
    description: "Лазаревское — идеальное место для отдыха с детьми. Пляжи, аквапарки, развлечения.",
    url: "https://priboy1.ru/lazarevskoe",
    images: [
      {
        url: "https://priboy1.ru/header.jpg",
        width: 1200,
        height: 630,
        alt: "Лазаревское — курорт на Черном море",
      },
    ],
    type: "website",
  },
}

const features = [
  {
    icon: Waves,
    title: "Тёплое море",
    description: "Галечные пляжи с пологим входом — безопасно для детей"
  },
  {
    icon: Sun,
    title: "Солнечный климат",
    description: "Более 300 солнечных дней в году, сезон с мая по октябрь"
  },
  {
    icon: Mountain,
    title: "Горы рядом",
    description: "Водопады, ущелья и экскурсии в горы Кавказа"
  },
  {
    icon: Users,
    title: "Для всей семьи",
    description: "Аквапарки, дельфинарий, парки аттракционов"
  },
  {
    icon: Heart,
    title: "Доступные цены",
    description: "Отдых дешевле, чем в центральном Сочи"
  },
  {
    icon: MapPin,
    title: "Удобно добраться",
    description: "Поезд приходит прямо в Лазаревское"
  }
]

const sections = [
  {
    title: "Достопримечательности",
    description: "Водопады, ущелья, дольмены, аквапарки и развлечения",
    href: "/lazarevskoe/dostoprimechatelnosti",
    image: "/blog-attractions.jpg"
  },
  {
    title: "Пляжи Лазаревского",
    description: "Галечные пляжи для отдыха с детьми и взрослыми",
    href: "/lazarevskoe/plyazhi",
    image: "/blog-lazarevskoe-beach.jpg"
  },
  {
    title: "Наш блог",
    description: "Статьи об отдыхе, советы туристам, интересные факты",
    href: "/blog",
    image: "/blog-family-vacation.jpg"
  }
]

export default function LazarevskoePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/fasad.jpg"
              alt="Лазаревское — курорт для семейного отдыха"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 gradient-hero-overlay" />
          </div>
          <div className="relative z-10 site-container">
            <div className="glass-pill inline-flex mb-4"><Text size="sm" className="tracking-[0.2em] uppercase text-gold">Курорт Большого Сочи</Text></div>
            <Heading level="h1" size="hero" tone="inverse" className="mb-6 max-w-3xl">
              Лазаревское — идеальный курорт для семейного отдыха
            </Heading>
            <Text size="lg" tone="inverse" className="max-w-2xl mb-8 opacity-90">
              Тёплое море, ласковое солнце, аквапарки и развлечения для детей — 
              всё, что нужно для незабываемого отпуска всей семьёй
            </Text>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="brand">
                <Link href="/booking">Забронировать отель</Link>
              </Button>
              <Button asChild size="lg" variant="inverse">
                <Link href="/lazarevskoe/dostoprimechatelnosti">Что посмотреть</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="site-section bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-10 h-0.5 bg-terracotta rounded-full" />
                  <p className="site-eyebrow">О курорте</p>
                </div>
                <Heading level="h2" size="section" className="mb-6">
                  Почему семьи выбирают Лазаревское
                </Heading>
                <Muted className="mb-6">
                  Лазаревское — самый большой курортный посёлок в составе Большого Сочи, 
                  расположенный в 60 км от центра города. Здесь сочетаются все преимущества 
                  черноморского побережья: тёплое море, субтропический климат и величественные 
                  горы Кавказа.
                </Muted>
                <Muted className="mb-6">
                  Для семей с детьми Лазаревское — настоящая находка: аквапарки, дельфинарий, 
                  парки аттракционов, а цены заметно ниже, чем в центральном Сочи. Плюс сюда 
                  легко добраться — поезд приходит прямо на станцию Лазаревская.
                </Muted>
                <ul className="space-y-3">
                  {[
                    "7 км галечных пляжей вдоль побережья",
                    "Купальный сезон — с мая по октябрь",
                    "2 аквапарка и дельфинарий",
                    "Парк аттракционов прямо у отеля"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/pool.jpg"
                  alt="Отдых в Лазаревском с детьми"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Text size="sm" tone="accent" className="tracking-[0.2em] uppercase mb-4">Преимущества</Text>
              <Heading level="h2" size="section">Что делает Лазаревское особенным</Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 border border-border">
                  <feature.icon className="h-10 w-10 text-terracotta mb-4" />
                  <Heading level="h3" size="small" className="mb-2">{feature.title}</Heading>
                  <Muted>{feature.description}</Muted>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Text size="sm" tone="accent" className="tracking-[0.2em] uppercase mb-4">Узнайте больше</Text>
              <Heading level="h2" size="section">Всё о Лазаревском</Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <AppLink
                  key={index}
                  href={section.href}
                  variant="standalone"
                  className="group relative overflow-hidden border border-border hover:border-terracotta transition-colors"
                >
                  <div className="relative h-48">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                  </div>
                  <div className="p-6 bg-white">
                    <Heading level="h3" size="small" className="mb-2 group-hover:text-terracotta transition-colors">
                      {section.title}
                    </Heading>
                    <Text size="sm" tone="muted">{section.description}</Text>
                  </div>
                </AppLink>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel CTA */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/lobby.jpg"
                  alt="Гостиница Прибой в Лазаревском"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <Text size="sm" className="tracking-[0.2em] uppercase text-gold mb-4">Ваш отель в Лазаревском</Text>
                <Heading level="h2" size="section" tone="inverse" className="mb-6">
                  Гостиница Прибой
                </Heading>
                <Text tone="inverse" className="opacity-80 mb-6">
                  Комфортный отель для семейного отдыха в Лазаревском с собственным бассейном, 
                  пляжем у моря и парком аттракционов прямо на территории. 
                  Всё для отдыха с детьми по доступным ценам.
                </Text>
                <ul className="space-y-3 mb-8">
                  {[
                    "Открытый бассейн с подогревом",
                    "Парк аттракционов у отеля",
                    "Пляж у самого моря",
                    "Ресторан с детским меню",
                    "Номера от 4 500 ₽ за ночь"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" variant="brand">
                  <Link href="/booking">Забронировать номер</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
