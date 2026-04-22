"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  alt?: string
}

export function ImageModal({ images, currentIndex: initialIndex, isOpen, onClose, alt = "Изображение" }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-2 bg-black/95 border-none overflow-visible !flex !items-center !justify-center"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{alt} - изображение {currentIndex + 1} из {images.length}</DialogTitle>
        <div className="relative flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-2 -right-2 z-50 text-white hover:bg-white/20 rounded-full bg-black/70 border-2 border-white/20"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Previous Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="absolute left-2 z-50 text-white hover:bg-white/20 rounded-full bg-black/70 border-2 border-white/20"
              aria-label="Предыдущее изображение"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          {/* Image Container */}
          <div className="relative flex items-center justify-center">
            <Image
              src={currentImage}
              alt={`${alt} ${currentIndex + 1}`}
              width={1920}
              height={1080}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              priority
              sizes="90vw"
              quality={85}
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="absolute right-2 z-50 text-white hover:bg-white/20 rounded-full bg-black/70 border-2 border-white/20"
              aria-label="Следующее изображение"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm z-50">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

