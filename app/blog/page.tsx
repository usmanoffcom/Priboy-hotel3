import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogPosts, getBlogCategories } from "@/lib/blog-data"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { Heading } from "@/components/ui/heading"
import { PageHero } from "@/components/ui/page-hero"
import { AppLink } from "@/components/ui/app-link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Блог о гостинице Прибой и отдыхе в Лазаревском — полезные статьи и советы",
  description: "Блог гостиницы Прибой в Лазаревском: полезные статьи об отдыхе на Черном море, достопримечательностях Лазаревского, развлечениях, экскурсиях, семейном отдыхе. Советы туристам, обзоры мест, личный опыт гостей.",
  alternates: {
    canonical: "https://priboy1.ru/blog",
  },
  openGraph: {
    title: "Блог о гостинице Прибой и отдыхе в Лазаревском — полезные статьи",
    description: "Блог гостиницы Прибой: статьи об отдыхе в Лазаревском, достопримечательностях, развлечениях, экскурсиях, семейном отдыхе. Советы туристам и обзоры мест.",
    url: "https://priboy1.ru/blog",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Блог гостиницы Прибой",
      },
    ],
    type: "website",
  },
}

export default function BlogPage() {
  const categories = getBlogCategories()
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Наш блог"
          title="Полезный Блог от Лучшего Отеля в Лазаревское"
          description="Отдых в Лазаревском: здоровье, комфорт и главные достопримечательности"
          backgroundImage="https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg"
        />

        {/* Categories */}
        <section className="py-6 bg-white border-b border-border">
          <div className="site-container">
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="sm">
                <Link href="/blog">Все статьи</Link>
              </Button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="h-9 px-4 py-2 text-sm border border-border text-foreground hover:bg-cream transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-terracotta text-white text-xs px-3 py-1">
                    {featuredPost.category}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Heading level="h2" className="text-2xl md:text-3xl mb-4 group-hover:text-terracotta transition-colors">
                    {featuredPost.title}
                  </Heading>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-terracotta font-medium">
                    Читать далее
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Other Posts Grid */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-terracotta text-white text-xs px-2 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Heading level="h2" className="text-2xl md:text-3xl mb-6 text-center">
              Отдых в Лазаревском: здоровье, комфорт и лучшие места для посещения
            </Heading>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Лазаревское – один из самых популярных курортных районов Большого Сочи, который привлекает туристов
                чистыми пляжами, мягким климатом и разнообразием развлечений. Отдых здесь сочетает в себе комфорт,
                оздоровление и возможность исследовать природные достопримечательности.
              </p>
              <p>
                <strong>Оздоровление на море:</strong> Морской воздух, насыщенный йодом и минералами, оказывает
                положительное влияние на дыхательную систему и укрепляет иммунитет. Купание в морской воде улучшает
                кровообращение, способствует восстановлению мышц и помогает избавиться от стресса.
              </p>
              <p>
                <strong>Лучшие достопримечательности:</strong> 33 водопада – одно из самых красивых мест в районе.
                Свирское ущелье – живописное место с водопадами и реликтовыми лесами. Крабовое ущелье – уникальная
                экосистема с редкими видами растений.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
