"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Sample gallery images - these would be replaced with actual images
const galleryImages = [
  {
    id: 1,
    src: '/Pic-1.jpg',
    alt: "Honoured with the National Mineral Award (2002)",
    caption: "Honoured with the National Mineral Award (2002) by Hon’ble Shri Sis Ram Ola, Minister of Mines, Government of India, at a ceremony held in New Delhi in 2004.",
  },
  {
    id: 2,
    src: '/Pic-2.jpg',
    alt: "Certificate of Recognition for Excellence – National Mineral Award (2002).",
    caption: "Certificate of Recognition for Excellence – National Mineral Award (2002).",
  },
  {
    id: 3,
    src: '/Pic-3.jpg',
    alt: "Coordinated & organized the “Offshore Industrial Survey”",
    caption: "Coordinated & organized the “Offshore Industrial Survey” train  ing under the Long Hydrography (Long ‘H’) Specialization Course for the Naval officers from developing countries at CSIR-NIO, Goa.",
  },
  {
    id: 4,
    src: '/Pic-4.jpg',
    alt: `Coordinated & organized the training programme for 44 auditors from 33 countries (deputed of the CAG of India) on "Environment Audit" at CSIR-NIO, Goa.`,
    caption: `Coordinated & organized the training programme for 44 auditors from 33 countries (deputed of the CAG of India) on "Environment Audit" at CSIR-NIO, Goa.`,
  },
  {
    id: 5,
    src: '/Pic-5.jpg',
    alt: "Scientific deliberation on an Indo-French collaborative project, awarded by the Indo-French Centre for the Promotion of Advanced Research (IFCPAR), held at CSIR-NIO, Goa.",
    caption: "Scientific deliberation on an Indo-French collaborative project, awarded by the Indo-French Centre for the Promotion of Advanced Research (IFCPAR), held at CSIR-NIO, Goa.",
  },
  {
    id: 6,
    src: '/Pic-6.jpg',
    alt: "Snapshot of the scientific deliberation group at the Singapore Convention Centre during the conference proceedings.",
    caption: "Snapshot of the scientific deliberation group at the Singapore Convention Centre during the conference proceedings.",
  },
  {
    id: 7,
    src: '/Pic-7.jpg',
    alt: "Photograph captured during the workshop on Natural Hazards and Coastal Processes of the Indian Coast at CSIR-NIO Regional Centre, Visakhapatnam.",
    caption: "Photograph captured during the workshop on Natural Hazards and Coastal Processes of the Indian Coast at CSIR-NIO Regional Centre, Visakhapatnam.",
  },
  {
    id: 8,
    src: '/Pic-8.jpg',
    alt: "Candid photo during a break in the ‘Tessera-2D’ refraction data modeling training at Tesseral Technologies, Calgary.",
    caption: "Candid photo during a break in the ‘Tessera-2D’ refraction data modeling training at Tesseral Technologies, Calgary.",
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
