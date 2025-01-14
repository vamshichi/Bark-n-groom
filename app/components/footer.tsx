import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'
// import Image from "next/image"

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
    {name: 'Book Now', href: '/booknow'}
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* <Image
              className="h-10"
              src="/logo.png"
              alt="Bark n Groom"
            /> */}
            <p className="text-gray-400 text-base">
              Professional pet grooming services at your doorstep in Bangalore.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="text-base text-gray-300">
                    {/* <p>123 Pet Street</p> */}
                    <p>Bangalore</p>
                  </li>
                  <li className="text-base text-gray-300">
                    <p>Phone:+91 70198 55494</p>
                    <p>Email:info@groomcity.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 groom city. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

 