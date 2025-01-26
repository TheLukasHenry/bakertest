import { Suspense } from "react"
import AuthGate from "./components/auth-gate"
import PaymentFlow from "./components/payment-flow"
import { Skeleton } from "@/components/ui/skeleton"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <Suspense fallback={<AuthGateSkeleton />}>
          <AuthGate />
        </Suspense>
        <Suspense fallback={<PaymentFlowSkeleton />}>
          <PaymentFlow />
        </Suspense>
      </div>
    </div>
  )
}

function AuthGateSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-3/4" />
    </div>
  )
}

function PaymentFlowSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[200px] w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

