import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Ticket, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { attractions } from "@/lib/lazarevskoe-data"

export const metadata: Metadata = {
  title: "Достопримечательности Лазаревского — что посмотреть | Гостиница Прибой",
  description: "Куда сходить в Лазаревском: водопады 33, аквапарки, дельфинарий, ущелья, парки аттракционов. Лучшие места для семейного отдыха с детьми.",
  keywords: "достопримечательности Лазаревского, что посмотреть, куда сходить с детьми, аквапарк, дельфинарий, водопады",
  alternates: {
    canonical: "https://priboy1.ru/lazarevskoe/dostoprimechatelnosti",
  },
  openGraph: {
    title: "Достопримечательности Лазаревского — что посмотреть",
    description: "Водопады, аквапарки, дельфинарий и другие развлечения для всей семьи в Лазаревском.",
    url: "https://priboy1.ru/lazarevskoe/dostoprimechatelnosti",
    images: [
      {
        url: "https://priboy1.ru/header.jpg",
        width: 1200,
        height: 630,
        alt: "Достопримечательности Лазаревского",
      },
    ],
    type: "website",
  },
}

export default function AttractionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/blog-attractions.jpg"
              alt="Достопримечательности Лазаревского"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 gradient-hero-overlay" />
          </div>
          <div className="relative z-10 site-container">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white">Главная</Link></li>
                <li>/</li>
                <li><Link href="/lazarevskoe" className="hover:text-white">Лазаревское</Link></li>
                <li>/</li>
                <li className="text-white">Достопримечательности</li>
              </ol>
            </nav>
            <div className="glass-pill inline-flex text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-4">Что посмотреть</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 max-w-3xl drop-shadow-md">
              Достопримечательности Лазаревского
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Водопады, ущелья, аквапарки, дельфинарий — куда сходить с детьми 
              и всей семьёй на отдыхе в Лазаревском
            </p>
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction) => (
                <Link
                  key={attraction.slug}
                  href={`/lazarevskoe/dostoprimechatelnosti/${attraction.slug}`}
                  className="group border border-border hover:border-terracotta transition-colors"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {attraction.familyFriendly && (
                      <div className="absolute top-4 left-4 bg-terracotta text-white text-xs px-3 py-1 flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Для всей семьи
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {attraction.shortDescription}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {attraction.distance && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-terracotta" />
                          {attraction.distance}
                        </div>
                      )}
                      {attraction.workingHours && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-terracotta" />
                          {attraction.workingHours}
                        </div>
                      )}
                      {attraction.price && (
                        <div className="flex items-center gap-2">
                          <Ticket className="h-4 w-4 text-terracotta" />
                          {attraction.price}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Остановитесь в гостинице Прибой
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Удобное расположение для посещения всех достопримечательностей. 
              Бассейн, парк аттракционов и пляж у моря — всё для семейного отдыха.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="brand">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
              <Button asChild size="lg" variant="brand-outline">
                <Link href="/rooms">Смотреть номера</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
