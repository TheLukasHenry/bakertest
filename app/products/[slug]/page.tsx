import { notFound } from "next/navigation"
import MediaGallery from "./components/media-gallery"
import ProductActions from "./components/product-actions"
import Recommendations from "./components/recommendations"

// Mock product data
const mockProducts = [
  {
    id: "1",
    slug: "1",
    name: "HVAC System A",
    price: 1999.99,
    description: "High-efficiency HVAC system for residential use.",
  },
  {
    id: "2",
    slug: "2",
    name: "Air Conditioner B",
    price: 899.99,
    description: "Powerful air conditioner for large spaces.",
  },
]

// Mock function to fetch product data
async function getProductData(slug: string) {
  // TODO: Replace with actual API call to Magento
  return mockProducts.find((p) => p.slug === slug) || null
}

// Generate static params for known products
export async function generateStaticParams() {
  // TODO: Replace with actual API call to get all product slugs
  return mockProducts.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductData(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MediaGallery productId={product.id} />
        <div>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <ProductActions product={product} />
        </div>
      </div>
      <Recommendations productId={product.id} />
    </div>
  )
}

