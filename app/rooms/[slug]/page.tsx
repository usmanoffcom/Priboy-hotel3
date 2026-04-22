import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { rooms, getRoomBySlug } from "@/lib/rooms-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { parseRoomCapacity } from "@/lib/capacity"
import { ExtraBedIndicator } from "@/components/extra-bed-indicator"
import { Heading } from "@/components/ui/heading"
import { AppLink } from "@/components/ui/app-link"
import {
  Users,
  Maximize,
  Bed,
  Eye,
  Tv,
  Wind,
  Coffee,
  Bath,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { RoomGallery } from "@/components/room-gallery"

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const room = getRoomBySlug(slug)

  if (!room) {
    return {
      title: "Номер не найден",
    }
  }

  const cap = parseRoomCapacity(room.capacity)
  const capMax =
    cap.kind === "fixed" || cap.kind === "range" || cap.kind === "extra"
      ? cap.maxGuests
      : undefined


  const baseUrl = "https://priboy1.ru"
  const canonicalUrl = `${baseUrl}/rooms/${slug}`

  return {
    title: `${room.name} — Гостиница Прибой, от ${room.priceBreakfast} | Лазаревское`,
    description: `${room.name} в гостинице Прибой в Лазаревском. Площадь ${room.size}${capMax ? `, вместимость до ${capMax} человек` : ""}, вид ${room.view}. ${room.description || ''} Цены от ${room.priceBreakfast} за ночь. Бронирование онлайн.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${room.name} | Гостиница Прибой`,
      description: room.description || `Забронировать ${room.name} в гостинице Прибой`,
      url: canonicalUrl,
      images: room.images && room.images.length > 0 ? [
        {
          url: room.images[0],
          width: 1200,
          height: 630,
          alt: room.name,
        },
      ] : undefined,
    },
  }
}

const amenityIcons: Record<string, React.ReactNode> = {
  Кондиционер: <Wind className="h-5 w-5" />,
  Телевизор: <Tv className="h-5 w-5" />,
  "Чайная станция": <Coffee className="h-5 w-5" />,
  "Халат и тапочки": <Bath className="h-5 w-5" />,
  "Три халата": <Bath className="h-5 w-5" />,
  "Wi-Fi": <Wifi className="h-5 w-5" />,
  Балкон: <Eye className="h-5 w-5" />,
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const room = getRoomBySlug(slug)

  if (!room) {
    notFound()
  }

  const capacity = parseRoomCapacity(room.capacity)

  const currentIndex = rooms.findIndex((r) => r.slug === slug)
  const prevRoom = currentIndex > 0 ? rooms[currentIndex - 1] : null
  const nextRoom = currentIndex < rooms.length - 1 ? rooms[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main>
        {/* Room Header with Breadcrumb and Gallery */}
        <section className="pt-28 sm:pt-32 pb-6 bg-cream">
          <div className="site-container">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <AppLink href="/" tone="muted" variant="inline" className="hover:text-foreground no-underline hover:no-underline">
                Главная
              </AppLink>
              <span>/</span>
              <AppLink href="/rooms" tone="muted" variant="inline" className="hover:text-foreground no-underline hover:no-underline">
                Номера
              </AppLink>
              <span>/</span>
              <span className="text-foreground">{room.name}</span>
            </nav>
            
            {/* Title and Info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 mb-3">
              <Heading level="h1" className="text-xl md:text-2xl">{room.name}</Heading>
              <div className="flex items-center gap-4 sm:gap-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Maximize className="h-4 w-4" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span className="inline-flex items-center gap-1">
                    {capacity.display}
                    {capacity.kind === "extra" ? <ExtraBedIndicator /> : null}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  <span>{room.view}</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <RoomGallery images={room.images} name={room.name} />
          </div>
        </section>

        {/* Content */}
        <section className="site-section bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <div>
                  <Heading level="h3" className="mb-4">Детали номера</Heading>
                  <p className="text-muted-foreground leading-relaxed">{room.fullDescription}</p>
                </div>

                {/* Room Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-cream text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Спальные места</p>
                    <p className="text-sm font-medium">{room.beds}</p>
                  </div>
                  <div className="p-4 bg-cream text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Вместимость</p>
                    <p className="text-sm font-medium">
                      <span className="inline-flex items-center gap-1">
                        {capacity.display}
                        {capacity.kind === "extra" ? <ExtraBedIndicator className="text-terracotta" /> : null}
                      </span>
                    </p>
                  </div>
                  <div className="p-4 bg-cream text-center">
                    <Maximize className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Площадь</p>
                    <p className="text-sm font-medium">{room.size}</p>
                  </div>
                  <div className="p-4 bg-cream text-center">
                    <Eye className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Вид</p>
                    <p className="text-sm font-medium">{room.view}</p>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <Heading level="h3" className="mb-4">Удобства в номере</Heading>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-cream">
                        <div className="text-terracotta">
                          {amenityIcons[amenity] || <Sparkles className="h-5 w-5" />}
                        </div>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Services */}
                {room.includedInPrice && room.includedInPrice.length > 0 && (
                  <div>
                    <Heading level="h3" className="mb-4">Включено в проживание</Heading>
                    <div className="space-y-3">
                      {room.includedInPrice.map((item, index) => (
                        <div key={index} className="flex gap-3 p-4 bg-cream border border-border/50">
                          <Sparkles className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-foreground text-white p-6">
                  <Heading level="h4" tone="inverse" className="mb-6">Забронировать номер</Heading>

                  {/* Prices */}
                  <div className="mb-6">
                    <div className="p-4 bg-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white/70">Завтраки включены</span>
                        <span className="text-xl font-semibold text-gold">{room.priceBreakfast}</span>
                      </div>
                      <p className="text-xs text-white/50">за номер / сутки</p>
                      <p className="text-xs text-white/50 mt-2">Завтраки включены с 02.05.2026 по 01.10.2026</p>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gold hover:bg-gold/90 text-foreground mb-4"
                  >
                    <Link href={`/booking?room=${room.slug}`}>Забронировать онлайн</Link>
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/30 text-white hover:bg-white/10 bg-transparent text-xs"
                    >
                      <Link href="/prices">Сезонные цены</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/30 text-white hover:bg-white/10 bg-transparent text-xs"
                    >
                      <Link href="/contacts">Связаться</Link>
                    </Button>
                  </div>

                  {/* Tax Notice */}
                  <p className="text-[10px] text-white/50 mt-4 leading-relaxed">
                    * С 1 января 2025 года на территории РФ действует туристический налог в соответствии с изменениями в
                    Налоговом кодексе РФ (глава 33.1) – Входит в стоимость проживания
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Other Rooms */}
        <section className="py-12 bg-cream border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {prevRoom ? (
                <Link
                  href={`/rooms/${prevRoom.slug}`}
                  className="flex items-center gap-3 group hover:text-terracotta transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Предыдущий</p>
                    <p className="font-medium">{prevRoom.name}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/rooms">Все номера</Link>
              </Button>

              {nextRoom ? (
                <Link
                  href={`/rooms/${nextRoom.slug}`}
                  className="flex items-center gap-3 group hover:text-terracotta transition-colors text-right"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">Следующий</p>
                    <p className="font-medium">{nextRoom.name}</p>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
