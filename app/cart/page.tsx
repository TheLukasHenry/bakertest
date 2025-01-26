import { Suspense } from "react"
import CartItems from "./components/cart-items"
import CheckoutPrep from "./components/checkout-prep"
import { Skeleton } from "@/components/ui/skeleton"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Suspense fallback={<CartItemsSkeleton />}>
            <CartItems />
          </Suspense>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<CheckoutPrepSkeleton />}>
            <CheckoutPrep />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function CartItemsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-lg p-4">
          <div className="flex gap-4">
            <Skeleton className="h-24 w-24" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CheckoutPrepSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

