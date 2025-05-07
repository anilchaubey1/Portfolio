"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

// Sample gallery images - these would be replaced with actual images
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey during oceanographic expedition",
    caption: "Oceanographic expedition in the Indian Ocean (2015)",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey receiving National Geoscience Award",
    caption: "Receiving the National Geoscience Award (2010)",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey with research team",
    caption: "With research team at CSIR-NIO, Goa (2012)",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey during deep-sea diving expedition",
    caption: "Deep-sea diving expedition in the Indian Ocean (2000)",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey at international conference",
    caption: "Presenting research at AGU Fall Meeting, San Francisco (2012)",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey aboard research vessel",
    caption: "Aboard research vessel R/V l'Atalante (2000)",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey at IIT ISM Dhanbad",
    caption: "Teaching at IIT (ISM) Dhanbad (2022)",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Prof. Chaubey conducting field work",
    caption: "Field work at the Arabian Sea (2018)",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <section id="gallery" className="section-container">
      <h2 className="section-title">Photo Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={600}
              className="max-h-[70vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white">
              <p className="text-lg">{galleryImages[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
