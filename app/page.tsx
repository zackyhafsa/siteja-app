import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import FaqSection from './components/FaqSection'

const page = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FaqSection />
    </main>
  )
}

export default page