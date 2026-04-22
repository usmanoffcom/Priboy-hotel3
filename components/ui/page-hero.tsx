import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  className?: string
  backgroundImage?: string
}

export function PageHero({ eyebrow, title, description, className, backgroundImage }: PageHeroProps) {
  const bgClass = backgroundImage ? "page-hero-dynamic-bg" : ""
  return (
    <>
      {backgroundImage && (
        <style
          dangerouslySetInnerHTML={{
            __html: `.page-hero-dynamic-bg { background-image: url(${JSON.stringify(backgroundImage)}); }`,
          }}
        />
      )}
      <section
        className={cn(
          "relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-cover bg-center bg-foreground",
          bgClass,
          className
        )}
      >
        <div className="absolute inset-0 gradient-page-hero" />
        <div className="site-container text-center">
          <div className="relative z-10">
            {eyebrow ? (
              <p className="glass-pill inline-flex text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-4">{eyebrow}</p>
            ) : null}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 drop-shadow-md">{title}</h1>
            {description ? <p className="text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">{description}</p> : null}
          </div>
        </div>
      </section>
    </>
  )
}
