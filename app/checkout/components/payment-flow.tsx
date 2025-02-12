'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'

export default function PaymentFlow() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Initialize Stripe Elements with core-js polyfills
    const initializeStripe = async () => {
      try {
        // TODO: Initialize Stripe Elements
        console.log('Initializing Stripe Elements with polyfills')
      } catch (error) {
        console.error('Stripe initialization error:', error)
      }
    }

    initializeStripe()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: Process payment through PCI-compliant iframe
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // TODO: Send order confirmation via RabbitMQ
      console.log('Sending order confirmation via RabbitMQ')

      toast({
        title: 'Order Confirmed',
        description: 'Your order has been successfully processed.',
      })

      router.push('/checkout/confirmation')
    } catch (error) {
      toast({
        title: 'Payment Error',
        description:
          'There was an error processing your payment. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>
          Enter your payment information to complete your order
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-holder">Card Holder Name</Label>
            <Input id="card-holder" placeholder="John Doe" required />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                placeholder="4242 4242 4242 4242"
                className="font-mono"
                maxLength={19}
                onChange={(e) => {
                  // Format card number with spaces
                  const value = e.target.value.replace(/\s/g, '')
                  const formatted = value.match(/.{1,4}/g)?.join(' ') || value
                  e.target.value = formatted
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  maxLength={5}
                  className="font-mono"
                  onChange={(e) => {
                    // Format expiry date with slash
                    const value = e.target.value.replace(/\D/g, '')
                    if (value.length >= 2) {
                      e.target.value = value.slice(0, 2) + '/' + value.slice(2)
                    }
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="123"
                  maxLength={3}
                  className="font-mono"
                  type="password"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" placeholder="J. Smith" className="font-mono" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="billing-zip">Billing ZIP Code</Label>
            <Input
              id="billing-zip"
              placeholder="12345"
              required
              pattern="[0-9]{5}"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Complete Order'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
