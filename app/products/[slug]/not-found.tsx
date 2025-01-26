import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
      <p className="text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
      <Button asChild>
        <Link href="/products">Browse All Products</Link>
      </Button>
    </div>
  )
}

