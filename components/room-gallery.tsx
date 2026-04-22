"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoomGalleryProps {
  images: string[]
  name: string
}

export function RoomGallery({ images, name }: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${name} - фото ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10 shadow-md"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10 shadow-md"
          onClick={goToNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="absolute bottom-4 right-4 bg-foreground/80 text-white text-sm px-3 py-1 rounded-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`aspect-[4/3] overflow-hidden rounded-md transition-all ${
              index === currentIndex ? "ring-2 ring-terracotta" : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${name} - миниатюра ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
