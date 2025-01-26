"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    name: "HVAC System A",
    price: 1999.99,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Air Conditioner B",
    price: 899.99,
    quantity: 2,
    image: "/placeholder.svg?height=200&width=200",
  },
]

// Mock cross-sell products
const crossSellProducts = [
  {
    id: "3",
    name: "Thermostat D",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Air Filter Pack",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function CartItems() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // TODO: Implement Google Tag Manager conversion tracking
    console.log("Initialize GTM tracking")
  }, [])

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setLoading(true)
    try {
      // TODO: Implement Magento API call
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call

      setCartItems((items) => items.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))

      toast({
        title: "Cart updated",
        description: "Your cart has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update cart. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const removeItem = async (itemId: string) => {
    setLoading(true)
    try {
      // TODO: Implement Magento API call
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call

      setCartItems((items) => items.filter((item) => item.id !== itemId))

      toast({
        title: "Item removed",
        description: "The item has been removed from your cart.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove item. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex gap-4 p-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={96}
                height={96}
                className="rounded-lg object-cover"
              />
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                    {item.name}
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} disabled={loading}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-lg font-semibold">${item.price.toFixed(2)}</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={loading || item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                    className="w-20 text-center"
                    disabled={loading}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={loading}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {cartItems.length > 0 ? (
        <div className="text-right">
          <div className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">Your cart is empty</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      )}

      {cartItems.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {crossSellProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <Link href={`/products/${product.id}`} className="font-medium hover:underline">
                        {product.name}
                      </Link>
                      <div className="text-sm text-muted-foreground">${product.price.toFixed(2)}</div>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mt-2"
                        onClick={() => {
                          // TODO: Implement add to cart functionality
                          toast({
                            title: "Added to cart",
                            description: `${product.name} has been added to your cart.`,
                          })
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

