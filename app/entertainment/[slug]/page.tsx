import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { recreations, getRecreationBySlug } from "@/lib/recreation-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function generateStaticParams() {
  return recreations.map((recreation) => ({
    slug: recreation.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const recreation = getRecreationBySlug(slug)

  if (!recreation) {
    return {
      title: "Развлечение не найдено",
    }
  }

  const baseUrl = "https://priboy1.ru"
  const canonicalUrl = `${baseUrl}/entertainment/${slug}`

  // Создаем короткое описание (максимум 155 символов)
  const shortDescription = recreation.description 
    ? (recreation.description.length > 100 
        ? recreation.description.substring(0, 100).trim() + '...' 
        : recreation.description)
    : ''
  
  const metaDescription = shortDescription
    ? `${recreation.name} при гостинице Прибой в Лазаревском. ${shortDescription} Фото, режим работы.`
    : `${recreation.name} при гостинице Прибой в Лазаревском. Подробная информация, фотографии, режим работы. Бронирование онлайн.`

  return {
    title: `${recreation.name} в гостинице Прибой — описание, фото, цены | Лазаревское`,
    description: metaDescription.length > 160 ? metaDescription.substring(0, 157).trim() + '...' : metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${recreation.name} | Гостиница Прибой`,
      description: recreation.description || `${recreation.name} в гостинице Прибой`,
      url: canonicalUrl,
      images: recreation.images && recreation.images.length > 0 ? [
        {
          url: recreation.images[0],
          width: 1200,
          height: 630,
          alt: recreation.name,
        },
      ] : undefined,
    },
  }
}

export default async function RecreationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const recreation = getRecreationBySlug(slug)

  if (!recreation) {
    notFound()
  }

  const currentIndex = recreations.findIndex((r) => r.slug === slug)
  const prevRecreation = currentIndex > 0 ? recreations[currentIndex - 1] : null
  const nextRecreation = currentIndex < recreations.length - 1 ? recreations[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main>
        {/* Recreation Header */}
        <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">
                Главная
              </Link>
              <span>/</span>
              <Link href="/entertainment" className="hover:text-foreground transition-colors">
                Развлечения
              </Link>
              <span>/</span>
              <span className="text-foreground">{recreation.name}</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-6">{recreation.name}</h1>

            {/* Main Image */}
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden mb-8">
              <Image
                src={recreation.image}
                alt={recreation.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {recreation.fullDescription}
              </p>
            </div>

            {/* Gallery */}
            {recreation.images && recreation.images.length > 1 && (
              <div className="mt-12">
                <h2 className="text-2xl font-medium text-foreground mb-6">Фотогалерея</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {recreation.images.slice(1).map((image, index) => (
                    <div key={index} className="relative w-full h-48 md:h-64 overflow-hidden">
                      <Image
                        src={image}
                        alt={`${recreation.name} - фото ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Navigation to Other Recreations */}
        <section className="py-12 bg-cream border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {prevRecreation ? (
                <Link
                  href={`/entertainment/${prevRecreation.slug}`}
                  className="flex items-center gap-3 group hover:text-terracotta transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Предыдущее</p>
                    <p className="font-medium">{prevRecreation.name}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Button asChild variant="brand-outline">
                <Link href="/entertainment">Все развлечения</Link>
              </Button>

              {nextRecreation ? (
                <Link
                  href={`/entertainment/${nextRecreation.slug}`}
                  className="flex items-center gap-3 group hover:text-terracotta transition-colors text-right"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">Следующее</p>
                    <p className="font-medium">{nextRecreation.name}</p>
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

