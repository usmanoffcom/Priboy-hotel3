import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text, Lead, Muted, Small } from "@/components/ui/text"
import { PageHero } from "@/components/ui/page-hero"
import { SectionHeader } from "@/components/ui/section-header"
import { Star, Award, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Об отеле Прибой в Лазаревском — история, команда, отзывы, фото | priboy1.ru",
  description: "О гостинице Прибой в Лазаревском, Сочи: история отеля, команда профессионалов, ценности и философия гостеприимства. Комфортабельные номера, бассейн, парк аттракционов, рестораны. Отзывы гостей, фото номеров и территории.",
  alternates: {
    canonical: "https://priboy1.ru/about",
  },
  openGraph: {
    title: "Об отеле Прибой в Лазаревском — история, команда, отзывы",
    description: "О гостинице Прибой: история, команда, ценности гостеприимства. Комфортабельные номера, бассейн, парк аттракционов, рестораны. Отзывы гостей, фото.",
    url: "https://priboy1.ru/about",
    images: [
      {
        url: "https://priboy1.ru/header.jpg",
        width: 1200,
        height: 630,
        alt: "Гостиница Прибой в Лазаревском",
      },
    ],
    type: "website",
  },
}

const stats = [
  { icon: Calendar, value: "10+", label: "лет работы" },
  { icon: Users, value: "—", label: "довольных гостей" },
  { icon: Star, value: "—", label: "средняя оценка" },
  { icon: Award, value: "SPA", label: "собственный комплекс" },
]

const milestones = [
  { year: "2014", event: "Открытие отеля" },
  { year: "2016", event: "Расширение и модернизация номерного фонда" },
  { year: "2018", event: "Реновация номерного фонда" },
  { year: "2020", event: "Обновление инфраструктуры" },
  { year: "2023", event: "Реновация номеров и ресторана" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="С 2014 года"
          title="Об отеле"
          description="Гостиница Прибой — это комфортный отдых на побережье Черного моря в сердце Лазаревского"
          backgroundImage="/hotel-exterior-evening-view.jpg"
        />

        {/* Stats */}
        <section className="py-12 bg-terracotta">
          <div className="site-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat, index) => (
                <div key={index}>
                  <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                  <Heading level="h3" size="section" tone="inverse" weight="light" className="mb-1">{stat.value}</Heading>
                  <Small tone="inverse" className="opacity-80">{stat.label}</Small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="site-section bg-cream">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader
                  eyebrow="Наша история"
                  title={<>Традиции<br />гостеприимства</>}
                  className="mb-6"
                />
                <div className="space-y-4">
                  <Muted>
                    Гостиница «Прибой» была основана с целью создать на черноморском побережье отель
                    европейского уровня, который бы сочетал комфорт современного курорта с теплотой южного
                    гостеприимства.
                  </Muted>
                  <Muted>
                    За годы работы мы выросли в полноценный курортный комплекс с развитой
                    инфраструктурой: бассейном, ресторанами, парком аттракционов и собственным пляжем.
                  </Muted>
                  <Muted>
                    Сегодня «Прибой» — это комфортабельные номера, команда профессионалов и благодарные
                    гости, которые возвращаются к нам год за годом.
                  </Muted>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image src="/hotel-lobby-interior.jpg" alt="Лобби отеля" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="relative w-full h-48 mt-8 rounded-lg overflow-hidden">
                  <Image src="/hotel-pool-guests.jpg" alt="Бассейн" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image src="/hotel-staff-service.jpg" alt="Персонал" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="relative w-full h-48 mt-8 rounded-lg overflow-hidden">
                  <Image src="/hotel-room-detail.jpg" alt="Номер" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="site-section bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Этапы развития" title="Наш путь" centered className="mb-16" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <Text size="xl" tone="accent" weight="normal">{milestone.year}</Text>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-terracotta rounded-full mt-2" />
                  <div className="flex-1 pb-8 border-l-0">
                    <Text size="lg">{milestone.event}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="site-section site-section-soft">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image src="/hotel-team-photo.jpg" alt="Команда отеля" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div>
                <Small tone="accent" className="tracking-[0.2em] uppercase mb-4">Наша команда</Small>
                <Heading level="h2" size="section" className="mb-6">Люди, которые создают уют</Heading>
                <Muted className="mb-6">
                  Наша команда — это профессионалы своего дела: от администраторов ресепшн до шеф-поваров и
                  массажистов. Многие работают с нами с самого открытия отеля.
                </Muted>
                <Muted className="mb-8">
                  Мы гордимся нашим коллективом и постоянно инвестируем в обучение и развитие персонала, чтобы каждый
                  гость чувствовал себя особенным.
                </Muted>
                <blockquote className="border-l-4 border-terracotta pl-6 italic text-foreground">
                  "Наша миссия — создавать эмоции, которые хочется повторить. Каждый гость для нас — это возможность
                  подарить незабываемый отдых."
                  <footer className="mt-2 text-sm text-muted-foreground not-italic">— Команда отеля «Прибой»</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="site-section bg-white">
          <div className="site-container">
            <SectionHeader eyebrow="Философия" title="Наши ценности" centered className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <Text size="xl" tone="accent" weight="normal" className="text-5xl mb-4">01</Text>
                <Heading level="h3" size="card" className="mb-4">Гостеприимство</Heading>
                <Muted>
                  Мы принимаем каждого гостя как дорогого друга, уделяя внимание мельчайшим деталям и индивидуальным
                  пожеланиям.
                </Muted>
              </div>
              <div className="text-center p-8">
                <Text size="xl" tone="accent" weight="normal" className="text-5xl mb-4">02</Text>
                <Heading level="h3" size="card" className="mb-4">Качество</Heading>
                <Muted>
                  Мы не идём на компромиссы: от выбора постельного белья до меню ресторана — всё должно быть на высшем
                  уровне.
                </Muted>
              </div>
              <div className="text-center p-8">
                <Text size="xl" tone="accent" weight="normal" className="text-5xl mb-4">03</Text>
                <Heading level="h3" size="card" className="mb-4">Забота</Heading>
                <Muted>
                  Мы заботимся о комфорте гостей, о благополучии сотрудников и об окружающей среде нашего прекрасного
                  побережья.
                </Muted>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="site-section bg-foreground text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl border border-white/10 p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Станьте частью нашей истории</h2>
              <Lead tone="inverse" className="opacity-80 mb-8">Забронируйте номер и откройте для себя гостеприимство «Прибоя»</Lead>
              <Button asChild size="lg" variant="brand">
                <Link href="/booking">Забронировать</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
