'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/app/components/ui/card"
import { Globe, Users, Scissors, Heart } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: "Serving All of Bangalore",
    description: "We bring our professional grooming services to pet owners across Bangalore, ensuring convenience and comfort for your furry friends."
  },
  {
    icon: Users,
    title: "Experienced Groomers",
    description: "Our team of skilled groomers is trained to handle various breeds and temperaments, ensuring a safe and enjoyable experience for your pets."
  },
  {
    icon: Scissors,
    title: "Premium Grooming Tools",
    description: "We use top-quality, pet-safe grooming tools and products to provide the best care for your beloved companions."
  },
  {
    icon: Heart,
    title: "Passionate About Pets",
    description: "Our love for animals drives us to provide the highest standard of care and attention to every pet we groom."
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About Bark n Groom</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
  Founded by Zube Mallick, we bring professional pet grooming services to your doorstep in Bangalore.
</p>

        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4 mx-auto">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Bark n Groom, we're committed to providing top-notch grooming services that keep your pets healthy, happy, and looking their best. Our mobile grooming service brings the salon experience right to your doorstep, minimizing stress for your furry friends.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

