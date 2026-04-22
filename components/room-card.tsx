import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Maximize, Bed, ArrowRight } from "lucide-react"
import type { Room } from "@/lib/rooms-data"
import { parseRoomCapacity } from "@/lib/capacity"
import { ExtraBedIndicator } from "@/components/extra-bed-indicator"

export function RoomCard({ room }: { room: Room }) {
  const capacity = parseRoomCapacity(room.capacity)

  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-border/60 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-xl)] hover:border-terracotta/40 transition-all duration-500 hover:-translate-y-1">
      {/* Image */}
      <Link href={`/rooms/${room.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={room.images[0] || "/placeholder.svg"}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-lg shadow-sm rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide text-foreground">
          {room.size}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <Link href={`/rooms/${room.slug}`} className="group/title">
          <h3 className="text-lg font-bold text-foreground mb-3 group-hover/title:text-terracotta transition-colors leading-snug">
            {room.name}
          </h3>
        </Link>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3 text-[13px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-terracotta/70" />
            <span className="inline-flex items-center gap-1">
              {capacity.display}
              {capacity.kind === "extra" ? <ExtraBedIndicator /> : null}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="h-3.5 w-3.5 text-terracotta/70" />
            <span>{room.size}</span>
          </div>
        </div>

        {/* Beds */}
        <div className="flex items-center gap-1.5 text-[13px] text-muted-foreground mb-4">
          <Bed className="h-3.5 w-3.5 flex-shrink-0 text-terracotta/70" />
          <span className="line-clamp-1">{room.beds}</span>
        </div>

        {/* Price block */}
        <div className="mb-5 p-4 bg-gradient-to-br from-cream to-cream-dark/40 rounded-xl mt-auto border border-border/40">
          <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-widest font-medium">Завтраки включены</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-terracotta leading-none">{room.priceBreakfast}</span>
            <span className="text-xs text-muted-foreground">за ночь</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2.5">
          <Button
            asChild
            variant="brand-outline"
            size="sm"
            className="flex-1 text-[13px]"
          >
            <Link href={`/rooms/${room.slug}`}>
              Подробнее
            </Link>
          </Button>
          <Button
            asChild
            variant="brand"
            size="sm"
            className="flex-1 text-[13px]"
          >
            <Link href={`/booking?room=${room.slug}`}>
              Забронировать
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
