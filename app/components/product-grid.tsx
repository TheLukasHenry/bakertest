'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useProducts } from '@/hooks/use-magento'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProductGrid() {
  const searchCriteria = {
    'searchCriteria[pageSize]': '8',
    'searchCriteria[currentPage]': '1',
    'searchCriteria[filterGroups][0][filters][0][field]': 'status',
    'searchCriteria[filterGroups][0][filters][0][value]': '1',
    'searchCriteria[filterGroups][0][filters][0][conditionType]': 'eq',
  }

  const { products, loading, error } = useProducts(searchCriteria)

  if (error && process.env.NODE_ENV === 'production') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">
          Failed to load products. Please try again later.
        </p>
      </div>
    )
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="group">
                <CardContent className="p-4">
                  <Skeleton className="w-full h-48 mb-4 rounded" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/4" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))
          : products.map((product) => {
              const mediaGallery = product.media_gallery_entries?.[0]
              const imageUrl = mediaGallery
                ? `${process.env.NEXT_PUBLIC_MAGENTO_URL}/media/catalog/product${mediaGallery.file}`
                : '/placeholder.svg'

              return (
                <Card
                  key={product.id}
                  className="group hover:border-primary transition-colors"
                >
                  <CardContent className="p-4">
                    <Image
                      src={imageUrl}
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
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Link href={`/products/${product.sku}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
      </div>
    </section>
  )
}
