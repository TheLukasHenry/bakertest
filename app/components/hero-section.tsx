'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const [promoContent, setPromoContent] = useState(
    'Special Offer: 20% off all HVAC systems'
  )

  useEffect(() => {
    // TODO: Implement Magento CMS integration for dynamic promotional content
    console.log('Fetch dynamic promotional content from Magento CMS')
  }, [])

  const slides = [
    '/placeholder.svg?height=500&width=1000',
    '/placeholder.svg?height=500&width=1000&text=Slide+2',
    '/placeholder.svg?height=500&width=1000&text=Slide+3',
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
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
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide || '/placeholder.svg'}
            alt={`Slide ${index + 1}`}
            fill
            style={{
              objectFit: 'cover',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  )
}
