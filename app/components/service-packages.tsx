'use client'

import { Bath, Scissors, SprayCanIcon as Spray, Wind } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/app/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card"
import Link from 'next/link'

const services = [
  {
    title: "FULL SERVICE",
    price: "2200",
    icon: Scissors,
    features: [
      "2 times bath (normal and medicated)",
      "Mouth freshener",
      "Nail clipping",
      "D shedding",
      "Eyes cleaning",
      "Full body trimming",
      "Sanitary trimming",
      "Paws trimming",
      "Blow dry",
      "Body perfume",
    ],
  },
  {
    title: "SPA BATH",
    price: "1200",
    icon: Bath,
    features: [
      "Bath",
      "Nail clipping",
      "D shedding",
      "Eyes cleaning",
      "Blow dry",
      "Sanitary trimming",
      "Paws trimming",
      "Body perfume",
    ],
  },
  {
    title: "TRIM AND TIDY",
    price: "1500",
    icon: Wind,
    features: [
      "Nail clipping",
      "Ear cleaning",
      "Eyes cleaning",
      "Sanitary trimming",
      "Paws trimming",
      "Full Body Trimming",
    ],
  },
  {
    title: "NEAT AND TIDY",
    price: "1700",
    icon: Spray,
    features: [
      "Nail clipping",
      "Bath",
      "D shedding",
      "Eyes cleaning",
      "Blow dry",
      "Body styling",
      "Sanitary trimming",
      "Paws trimming",
      "Body perfume",
    ],
  },
]

export function ServicePackages() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b  bg-orange-200 text-white" id="services">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Choose the perfect grooming package for your furry friend. All services include gentle handling and premium products.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-black">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">₹{service.price}/-</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-primary mt-1">🐾</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full">
                    <Link href="/#contact">Book Now</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

