'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: 'HVAC System A',
    price: 1999.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    name: 'Air Conditioner B',
    price: 899.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    name: 'Furnace C',
    price: 1299.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    name: 'Thermostat D',
    price: 199.99,
    image: '/placeholder.svg?height=200&width=200',
  },
]

export default function ProductGrid() {
  const [products, setProducts] = useState(mockProducts)

  useEffect(() => {
    // TODO: Implement Magento GraphQL API integration for real product data
    console.log('Fetch product data from Magento GraphQL API')

    // TODO: Implement Rudderstack tracking for product impressions
    console.log('Track product impressions with Rudderstack')
  }, [])

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group hover:border-primary transition-colors"
          >
            <CardContent className="p-4">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
