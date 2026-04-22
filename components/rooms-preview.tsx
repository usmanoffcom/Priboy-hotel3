import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { rooms } from "@/lib/rooms-data"
import { parseRoomCapacity } from "@/lib/capacity"
import { ExtraBedIndicator } from "@/components/extra-bed-indicator"
import { SectionHeader } from "@/components/ui/section-header"

const roomPrices: Record<string, number> = {
  standart: 4500,
  "standart-plus": 4800,
  studia: 5100,
  poluluks: 5200,
  luks: 6700,
}

export function RoomsPreview() {
  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <SectionHeader
            eyebrow="Размещение"
            title="Наши номера"
          />
          <Button
            asChild
            variant="brand-outline"
            size="lg"
          >
            <Link href="/rooms" className="flex items-center gap-2">
              Все номера <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => {
            const minPrice = roomPrices[room.slug] || 4500
            const capacity = parseRoomCapacity(room.capacity)
            return (
              <Link
                key={room.id}
                href={`/rooms/${room.slug}`}
                className="group block rounded-xl overflow-hidden bg-white border border-border/60 shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-lg)] hover:border-terracotta/30 transition-all duration-500 hover:-translate-y-0.5"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={room.images[0] || "/placeholder.svg"}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-lg shadow-sm rounded-lg px-2.5 py-1 text-xs font-semibold">
                    {room.size}
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <h3 className="text-base font-bold text-foreground group-hover:text-terracotta transition-colors leading-snug">
                    {room.shortName}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {room.size} •{" "}
                    <span className="inline-flex items-center gap-1">
                      {capacity.display}
                      {capacity.kind === "extra" ? <ExtraBedIndicator /> : null}
                    </span>
                  </p>
                  <div className="flex items-baseline gap-1.5 pt-1">
                    <span className="text-base font-bold text-terracotta">от {minPrice.toLocaleString('ru-RU')} ₽</span>
                    <span className="text-xs text-muted-foreground">за ночь</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
