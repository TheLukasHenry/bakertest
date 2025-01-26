'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const [promoContent, setPromoContent] = useState(
    'Special Offer: 20% off all HVAC systems'
  )

  useEffect(() => {
    // TODO: Implement Magento CMS integration for dynamic promotional content
    console.log('Fetch dynamic promotional content from Magento CMS')
  }, [])

  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-primary opacity-90"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">{promoContent}</h1>
        <p className="text-xl mb-8">Upgrade your HVAC systems with Baker</p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-primary hover:bg-gray-100"
        >
          Shop Now
        </Button>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=1000')",
          }}
        ></div>
      </div>
    </section>
  )
}
