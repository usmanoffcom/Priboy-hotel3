"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  telegramHighlightSlides,
  type TelegramHighlightSlide,
} from "@/lib/telegram-highlights-data"
import { cn } from "@/lib/utils"

function videoMimeType(src: string): string {
  const s = src.toLowerCase()
  if (s.endsWith(".mov")) return "video/quicktime"
  if (s.endsWith(".webm")) return "video/webm"
  return "video/mp4"
}

/** Кадр из самого видео (середина ролика или начало как запасной вариант) — без отдельной обложки. */
function useVideoFramePoster(mediaSrc: string, enabled: boolean) {
  const [posterUrl, setPosterUrl] = React.useState<string | null>(null)
  const thumbRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    if (!enabled) {
      setPosterUrl(null)
      return
    }
    setPosterUrl(null)
    const thumb = thumbRef.current
    if (!thumb) return

    let cancel = false

    const drawPoster = () => {
      if (cancel) return
      const v = thumbRef.current
      if (!v || v.videoWidth < 2 || v.videoHeight < 2) return
      try {
        const c = document.createElement("canvas")
        c.width = v.videoWidth
        c.height = v.videoHeight
        const ctx = c.getContext("2d")
        if (!ctx) return
        ctx.drawImage(v, 0, 0)
        setPosterUrl(c.toDataURL("image/jpeg", 0.82))
      } catch {
        /* CORS / SecurityPolicy */
      }
    }

    const onSeeked = () => {
      if (cancel) return
      const v = thumbRef.current
      if (!v) return
      if (v.videoWidth >= 2 && v.videoHeight >= 2) {
        drawPoster()
        return
      }
      if (v.currentTime > 0.02) {
        v.currentTime = 0
      }
    }

    const onLoadedMetadata = () => {
      if (cancel) return
      const v = thumbRef.current
      if (!v) return
      const d = v.duration
      if (Number.isFinite(d) && d > 0.25) {
        v.currentTime = Math.min(Math.max(d * 0.5, 0.08), d - 0.08)
      } else {
        v.currentTime = 0.05
      }
    }

    thumb.addEventListener("loadedmetadata", onLoadedMetadata)
    thumb.addEventListener("seeked", onSeeked)
    return () => {
      cancel = true
      thumb.removeEventListener("loadedmetadata", onLoadedMetadata)
      thumb.removeEventListener("seeked", onSeeked)
    }
  }, [enabled, mediaSrc])

  return { posterUrl, thumbRef }
}

function SlideMedia({
  slide,
  active,
}: {
  slide: TelegramHighlightSlide
  active: boolean
}) {
  const portraitContain = slide.mediaAspect === "9/16"
  const [videoMissing, setVideoMissing] = React.useState(false)
  const mainRef = React.useRef<HTMLVideoElement>(null)

  const useFramePoster =
    slide.kind === "video" && !slide.posterSrc && !videoMissing
  const { posterUrl: framePoster, thumbRef } = useVideoFramePoster(
    slide.mediaSrc,
    useFramePoster,
  )

  React.useEffect(() => {
    const el = mainRef.current
    if (!el) return
    if (!active) {
      el.pause()
    }
  }, [active])

  if (slide.kind === "video" && !videoMissing) {
    const poster = slide.posterSrc ?? framePoster ?? undefined

    return (
      <>
        {useFramePoster ? (
          <video
            ref={thumbRef}
            src={slide.mediaSrc}
            preload="auto"
            muted
            playsInline
            className="pointer-events-none fixed -left-[9999px] top-0 h-1 w-1 opacity-0"
            aria-hidden
            tabIndex={-1}
          />
        ) : null}
        <video
          ref={mainRef}
          className={cn(
            "absolute inset-0 h-full w-full",
            portraitContain ? "object-contain" : "object-cover",
          )}
          controls
          playsInline
          preload="metadata"
          {...(poster ? { poster } : {})}
          aria-label={slide.title}
          onError={() => setVideoMissing(true)}
        >
          <source src={slide.mediaSrc} type={videoMimeType(slide.mediaSrc)} />
        </video>
      </>
    )
  }

  if (slide.kind === "video" && videoMissing &&
      !slide.posterSrc) {
    return (
      <div
        className="absolute inset-0 bg-foreground/15"
        role="img"
        aria-label={slide.title}
      />
    )
  }

  const imgSrc =
    slide.kind === "video" && videoMissing && slide.posterSrc
      ? slide.posterSrc
      : slide.mediaSrc

  return (
    <Image
      src={imgSrc}
      alt={slide.imageAlt ?? slide.title}
      fill
      className={portraitContain ? "object-contain" : "object-cover"}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  )
}

function SlideCopy({ slide }: { slide: TelegramHighlightSlide }) {
  return (
    <div className="flex min-h-0 flex-col justify-center gap-4 bg-cream p-6 sm:p-8 md:p-10">
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground leading-snug">
        {slide.title}
      </h3>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        {slide.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {slide.bullets?.length ? (
        <ul className="space-y-3">
          {slide.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-terracotta" />
              {b.href ? (
                <Link
                  href={b.href}
                  className="text-base font-medium text-foreground transition-colors hover:text-terracotta"
                >
                  {b.label}
                </Link>
              ) : (
                <span className="text-base font-medium text-foreground">
                  {b.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : null}
      {slide.ctaHref ? (
        <div className="pt-2">
          <Button asChild variant="brand" size="lg">
            {slide.ctaHref.startsWith("http") ? (
              <a
                href={slide.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {slide.ctaLabel ?? "Подробнее"}
              </a>
            ) : (
              <Link href={slide.ctaHref}>{slide.ctaLabel ?? "Подробнее"}</Link>
            )}
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export function TelegramHighlightsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setSelected(api.selectedScrollSnap())
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {telegramHighlightSlides.map((slide, index) => (
          <CarouselItem
            key={slide.id}
            className="pl-2 md:pl-4 basis-full"
          >
            <div className="site-card min-h-0 overflow-hidden border border-border/60 shadow-sm">
              <div className="grid min-h-0 md:grid-cols-2 md:items-stretch">
                <div
                  className={cn(
                    "bg-foreground/5",
                    slide.mediaAspect === "square"
                      ? "w-full min-h-0 self-stretch bg-foreground/5 p-0 md:h-full"
                      : slide.mediaAspect === "9/16"
                        ? "flex min-h-[220px] w-full items-center justify-center self-stretch md:h-full md:min-h-0 p-0"
                        : "relative aspect-video min-h-[220px] sm:min-h-[280px] md:aspect-auto md:min-h-[340px] md:min-h-full",
                  )}
                >
                  <div
                    className={cn(
                      slide.mediaAspect === "square"
                        ? "relative aspect-square w-full overflow-hidden bg-black"
                        : slide.mediaAspect === "9/16"
                          ? "relative aspect-[9/16] h-auto w-full max-h-full overflow-hidden bg-black md:h-full md:max-w-full md:w-auto"
                          : "relative min-h-[220px] w-full sm:min-h-[280px] md:absolute md:inset-0 md:min-h-full",
                    )}
                  >
                    <SlideMedia slide={slide} active={selected === index} />
                  </div>
                </div>
                <SlideCopy slide={slide} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-center gap-3">
        <CarouselPrevious
          variant="brand-outline"
          className="static translate-y-0 left-auto top-auto"
          aria-label="Предыдущая новость"
        />
        <CarouselNext
          variant="brand-outline"
          className="static translate-y-0 right-auto top-auto"
          aria-label="Следующая новость"
        />
      </div>
      <div
        className="mt-3 flex justify-center gap-1.5"
        aria-hidden="true"
      >
        {telegramHighlightSlides.map((s, i) => (
          <span
            key={s.id}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === selected ? "bg-terracotta" : "bg-terracotta/25",
            )}
          />
        ))}
      </div>
    </Carousel>
  )
}
