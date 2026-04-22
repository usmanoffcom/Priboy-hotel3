import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Ticket, ChevronRight, Users, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { attractions, getAttractionBySlug } from "@/lib/lazarevskoe-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return attractions.map((attraction) => ({
    slug: attraction.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const attraction = getAttractionBySlug(slug)

  if (!attraction) {
    return {
      title: "Достопримечательность не найдена",
    }
  }

  return {
    title: `${attraction.name} — достопримечательность Лазаревского | Гостиница Прибой`,
    description: attraction.shortDescription,
    keywords: `${attraction.name}, Лазаревское, достопримечательности, экскурсии, отдых с детьми`,
    alternates: {
      canonical: `https://priboy1.ru/lazarevskoe/dostoprimechatelnosti/${attraction.slug}`,
    },
    openGraph: {
      title: attraction.name,
      description: attraction.shortDescription,
      url: `https://priboy1.ru/lazarevskoe/dostoprimechatelnosti/${attraction.slug}`,
      type: "article",
      images: [attraction.image],
    },
  }
}

export default async function AttractionPage({ params }: PageProps) {
  const { slug } = await params
  const attraction = getAttractionBySlug(slug)

  if (!attraction) {
    notFound()
  }

  // Get related attractions (exclude current)
  const relatedAttractions = attractions
    .filter((a) => a.slug !== attraction.slug)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src={attraction.image}
              alt={attraction.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70 flex-wrap">
                <li><Link href="/" className="hover:text-white">Главная</Link></li>
                <li>/</li>
                <li><Link href="/lazarevskoe" className="hover:text-white">Лазаревское</Link></li>
                <li>/</li>
                <li><Link href="/lazarevskoe/dostoprimechatelnosti" className="hover:text-white">Достопримечательности</Link></li>
                <li>/</li>
                <li className="text-white">{attraction.name}</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              {attraction.familyFriendly && (
                <span className="bg-terracotta text-white text-sm px-3 py-1 flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Для всей семьи
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 max-w-3xl">
              {attraction.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {attraction.shortDescription}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">Описание</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="leading-relaxed">{attraction.fullDescription}</p>
                </div>

                {/* Features */}
                <div className="mt-10">
                  <h3 className="text-xl font-medium text-foreground mb-6">Особенности</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {attraction.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-cream border border-border">
                        <Check className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Info Card */}
                  <div className="border border-border p-6">
                    <h3 className="text-lg font-medium text-foreground mb-6">Информация</h3>
                    <div className="space-y-4">
                      {attraction.address && (
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm text-muted-foreground">Адрес</div>
                            <div className="text-foreground">{attraction.address}</div>
                          </div>
                        </div>
                      )}
                      {attraction.distance && (
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm text-muted-foreground">От отеля</div>
                            <div className="text-foreground">{attraction.distance}</div>
                          </div>
                        </div>
                      )}
                      {attraction.workingHours && (
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm text-muted-foreground">Время работы</div>
                            <div className="text-foreground">{attraction.workingHours}</div>
                          </div>
                        </div>
                      )}
                      {attraction.price && (
                        <div className="flex items-start gap-3">
                          <Ticket className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm text-muted-foreground">Стоимость</div>
                            <div className="text-foreground">{attraction.price}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hotel CTA */}
                  <div className="bg-foreground p-6 text-white">
                    <h3 className="text-lg font-medium mb-3">Остановитесь рядом</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Гостиница Прибой — удобная база для посещения всех достопримечательностей Лазаревского.
                    </p>
                    <Button asChild variant="brand" className="w-full">
                      <Link href="/booking">Забронировать номер</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Attractions */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-light text-foreground">Ещё в Лазаревском</h2>
              <Link
                href="/lazarevskoe/dostoprimechatelnosti"
                className="text-terracotta hover:text-terracotta-light flex items-center gap-1"
              >
                Все места <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedAttractions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/lazarevskoe/dostoprimechatelnosti/${item.slug}`}
                  className="group border border-border hover:border-terracotta transition-colors bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
