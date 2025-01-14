'use client'

import { useState } from 'react'
import Image, { StaticImageData } from "next/image"
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import ga1 from "@/app/images/galleary/Ga1.jpg"
import ga2 from '@/app/images/galleary/ga2.jpg'
import ga3 from '@/app/images/galleary/ga3.jpg'
import ga4 from '@/app/images/galleary/ga4.jpg'

const images = [
  { src: ga1, alt: "Cat relaxing during grooming" },
  { src: ga2, alt: "Cat relaxing during grooming" },
  { src: ga3, alt: "Cat relaxing during grooming" },
  { src: ga4, alt: "Cat relaxing during grooming" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Happy Clients</h2>
          <p className="mt-4 text-xl text-gray-600">See the amazing transformations of our furry friends</p>
        </motion.div>
        <motion.div 
          className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg break-inside-avoid"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <Image
              src={selectedImage}
              alt="Selected image"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <Button
              className="absolute top-2 right-2 bg-white/10 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
