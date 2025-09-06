"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProductsSection from "@/components/products-section"
import BrandSections from "@/components/brand-sections"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <BrandSections />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
