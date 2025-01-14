'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { PawPrintIcon as Paw, Scissors, Home, Heart } from 'lucide-react'
import g1 from '@/app/images/g1.jpg'
import g2 from '@/app/images/g2.jpg'
import g3 from '@/app/images/g3.jpg'
import g4 from '@/app/images/g4.jpg'

const images = [
  g1,
  g2,
  g3,
  g4,
]

const features = [
  { icon: Paw, text: "Expert Care" },
  { icon: Scissors, text: "Premium Styling" },
  { icon: Home, text: "Home Service" },
  { icon: Heart, text: "Pet-Friendly" },
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`Pet grooming ${currentImage + 1}`}
              fill
              // style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-black/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pamper Your Pet with <br />
            <span className="text-primary">Professional Grooming</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl max-w-3xl mx-auto lg:mx-0 mb-10 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Luxury grooming services for your furry friends, 
            right at your doorstep in Bangalore.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button size="lg" className="text-lg px-8 py-3">
              <Link href="/booknow">Book Now</Link>
            </Button>
            <Button size="lg" className="text-lg px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-white">
              <Link href="/#services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 lg:mt-0 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
              <feature.icon className="h-8 w-8 text-primary" />
              <span className="text-white font-semibold">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-primary w-6' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

