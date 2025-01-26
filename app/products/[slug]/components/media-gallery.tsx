"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock image data
const mockImages = [
  "/placeholder.svg?height=600&width=600&text=Image+1",
  "/placeholder.svg?height=600&width=600&text=Image+2",
  "/placeholder.svg?height=600&width=600&text=Image+3",
]

export default function MediaGallery({ productId }: { productId: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mockImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mockImages.length) % mockImages.length)
  }

  return (
    <div className="relative">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={mockImages[currentIndex] || "/placeholder.svg"}
          alt={`Product image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500"
        />
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
        onClick={prevImage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
        onClick={nextImage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="mt-4 flex justify-center">
        {mockImages.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`mx-1 ${index === currentIndex ? "bg-primary" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      {/* TODO: Implement Vimeo embedded video player */}
      <div className="mt-4 aspect-video bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">Vimeo Player Placeholder</p>
      </div>
    </div>
  )
}

