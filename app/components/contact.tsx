import { Button } from "@/app/components/ui/button"
import { Phone, Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-500">Book an appointment or get in touch with us</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
            <dl className="mt-8 space-y-6">
              <div className="flex">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-900">+91 7019855494</span>
                </dd>
              </div>
              <div className="flex">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-900">info@groomcity.in</span>
                </dd>
              </div>
              <div className="flex">
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-900">Serving All of Bangalore</span>
                </dd>
              </div>
            </dl>
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Pet Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Pet Breed"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

