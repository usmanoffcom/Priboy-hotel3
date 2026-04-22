import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Статья не найдена",
    }
  }

  const baseUrl = "https://priboy1.ru"
  const url = `${baseUrl}/blog/${slug}`

  return {
    title: `${post.title} | Гостиница Прибой`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
  const otherPosts = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] pt-28 sm:pt-32 pb-12 flex items-end justify-center overflow-hidden">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 gradient-page-hero" />
          <div className="relative z-10 w-full text-center text-white px-4 max-w-4xl">
            <span className="glass-pill inline-flex text-white text-sm mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-5xl font-light leading-tight text-balance mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="py-4 bg-cream border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-terracotta transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Посмотреть все статьи
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
              {post.content ? (
                <div 
                  className="text-base text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <>
                  <p className="text-base text-foreground leading-relaxed">
                    Лазаревское – это место, где можно совместить приятный отдых у моря с оздоровительными процедурами и
                    насыщенной экскурсионной программой. Планируя поездку, важно учитывать все детали, чтобы провести время
                    с комфортом и пользой для здоровья.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mt-4">
                    Гостиница «Прибой» в Лазаревском предлагает комфортные условия для отдыха: современные номера,
                    бассейн, ресторан с авторской кухней. Забронируйте номер и откройте для себя
                    лучший отдых на Черноморском побережье.
                  </p>
                </>
              )}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-cream-dark">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-light text-foreground mb-4">Готовы к отдыху?</h3>
            <p className="text-muted-foreground mb-6">Забронируйте номер в гостинице Прибой</p>
            <Button asChild variant="brand" size="lg">
              <Link href="/booking">Забронировать</Link>
            </Button>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-foreground mb-8 text-center">Другие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-cream border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-terracotta text-white text-xs px-2 py-1">
                      {relatedPost.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-medium text-foreground group-hover:text-terracotta transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
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
