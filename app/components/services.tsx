import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Bath, Scissors, Wind, SprayCanIcon as Spray } from 'lucide-react'

const services = [
  {
    title: "Full Service",
    price: "₹2200",
    icon: Scissors,
    description: "Complete grooming package including medicated bath, trimming, and more.",
  },
  {
    title: "Spa Bath",
    price: "₹1200",
    icon: Bath,
    description: "Relaxing bath with nail clipping, ear cleaning, and blow dry.",
  },
  {
    title: "Trim and Tidy",
    price: "₹1500",
    icon: Wind,
    description: "Full body trimming with sanitary trim and paw care.",
  },
  {
    title: "Neat and Tidy",
    price: "₹1700",
    icon: Spray,
    description: "Bath, blow dry, and styling with nail care and perfuming.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-500">Choose the perfect grooming package for your pet</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                <p className="text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

