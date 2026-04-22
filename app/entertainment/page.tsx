"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Waves, Dumbbell, Sparkles, MapPin, Clock } from "lucide-react"
import { recreations } from "@/lib/recreation-data"
import { Heading } from "@/components/ui/heading"
import { Text, Lead, Muted, Small } from "@/components/ui/text"
import { PageHero } from "@/components/ui/page-hero"
import { AppLink } from "@/components/ui/app-link"
import Link from "next/link"

const getIcon = (slug: string) => {
  switch (slug) {
    case "bassein":
      return <Waves className="h-8 w-8 text-terracotta" />
    case "trenajorni-zal":
      return <Dumbbell className="h-8 w-8 text-terracotta" />
    default:
      return <Sparkles className="h-8 w-8 text-terracotta" />
  }
}

export default function EntertainmentPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Развлечения"
          title={<>Отдых и развлечения при гостинице<br />«ПРИБОЙ» в Лазаревское, Сочи</>}
        />

        {/* Recreation Services Grid */}
        <section className="site-section bg-cream">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recreations.map((recreation) => (
                <AppLink
                  key={recreation.id}
                  href={`/entertainment/${recreation.slug}`}
                  variant="standalone"
                  className="group site-card overflow-hidden bg-white no-underline"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={recreation.image}
                      alt={recreation.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {getIcon(recreation.slug)}
                      <Heading level="h3" size="small" weight="semibold" className="group-hover:text-terracotta transition-colors">
                        {recreation.name}
                      </Heading>
                    </div>
                    <Muted className="mb-4 line-clamp-3">
                      {recreation.description}
                    </Muted>
                    <Small tone="accent" weight="medium" className="group-hover:underline">
                      Подробнее →
                    </Small>
                  </div>
                </AppLink>
              ))}
            </div>
          </div>
        </section>

        {/* Park Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Heading level="h2" size="section" className="mb-6">
                  Информация для наших гостей
                </Heading>
                <Lead tone="muted" className="mb-6">
                  Наш парк не даст скучать ни взрослым, ни самым маленьким. Тут каждый найдет развлечение по душе!
                </Lead>
                <Muted className="mb-6">
                  По-мимо теплого моря, вкусной еды, и ухода за собой хочется иногда и острых ощущений. И здесь вам тоже повезло, ведь прямо при нашем отеле расположен замечательный, уютный зеленый парк со множеством головокружительных аттракционов, пингвинарием, дельфинарием, и колесом обозрения, с которого открывается фантастический вид на горы и побережье.
                </Muted>
                <div className="flex items-center gap-4 mt-8">
                  <MapPin className="h-5 w-5 text-terracotta" />
                  <Text weight="medium">Парк расположен прямо при отеле</Text>
                </div>
              </div>
              <div className="relative w-full aspect-video overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fOZwHpdMLl0"
                  title="Лазаревское колесо обозрения и развлечения курорта"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 border border-border text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-terracotta" />
                </div>
                <Heading level="h3" size="small" weight="semibold" className="mb-3">Аттракционы</Heading>
                <Muted>
                  Головокружительные аттракционы для всех возрастов
                </Muted>
              </div>
              <div className="bg-white p-8 border border-border text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-terracotta" />
                </div>
                <Heading level="h3" size="small" weight="semibold" className="mb-3">Дельфинарий</Heading>
                <Muted>
                  Увлекательные представления с дельфинами
                </Muted>
              </div>
              <div className="bg-white p-8 border border-border text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-terracotta" />
                </div>
                <Heading level="h3" size="small" weight="semibold" className="mb-3">Колесо обозрения</Heading>
                <Muted>
                  Колесо обозрения с видом на горы и побережье
                </Muted>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-terracotta text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Heading level="h2" size="section" tone="inverse" className="mb-6">
              Готовы к незабываемому отдыху?
            </Heading>
            <Lead tone="inverse" className="mb-8 opacity-90">
              Забронируйте номер в гостинице Прибой и получите доступ ко всем развлечениям
            </Lead>
            <Button asChild size="lg" variant="inverse">
              <Link href="/booking">Забронировать номер</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
