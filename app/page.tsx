import { Navbar } from "@/app/components/navbar"
import { Hero } from "@/app/components/hero"
// import { Services } from "@/app/components/services"
import { Gallery } from "@/app/components/gallery"
import { About } from "@/app/components/about"
import { Testimonials } from "@/app/components/testimonials"
import { Contact } from "@/app/components/contact"
import { Footer } from "@/app/components/footer"
import { ServicePackages } from "./components/service-packages"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicePackages />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

