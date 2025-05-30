import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import BrandsSection from '@/components/BrandsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import PromoBanner from '@/components/PromoBarner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <TestimonialsSection />
      <PromoBanner />
      <ContactSection />
    </>
  )
}