import { useState, useEffect } from 'react'
import { magentoApi } from '@/lib/services/magento-api'
import type {
  MagentoProduct,
  MagentoCategory,
  MagentoCart,
  MagentoCustomer,
} from '@/lib/types/magento'

// Development mode fallback products
const DEV_PRODUCTS = {
  items: [
    {
      id: 1,
      sku: 'HVAC-001',
      name: 'Premium HVAC System',
      price: 1999.99,
      status: 1,
      visibility: 1,
      type_id: 'simple',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      media_gallery_entries: [],
    },
    {
      id: 2,
      sku: 'AC-001',
      name: 'Advanced Air Conditioner',
      price: 1499.99,
      status: 1,
      visibility: 1,
      type_id: 'simple',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      media_gallery_entries: [],
    },
  ],
}

export const useProducts = (searchCriteria?: Record<string, any>) => {
  const [products, setProducts] = useState<MagentoProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // In development, return mock data immediately
        if (process.env.NODE_ENV === 'development') {
          setProducts(DEV_PRODUCTS.items)
          return
        }

        const response = await magentoApi.products.getAll(searchCriteria)
        setProducts(response.items)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch products')
        )
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, []) // Remove searchCriteria from dependencies to prevent unnecessary rerenders

  return { products, loading, error }
}

export const useProduct = (sku: string) => {
  const [product, setProduct] = useState<MagentoProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await magentoApi.products.getById(sku)
        setProduct(data)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch product')
        )
      } finally {
        setLoading(false)
      }
    }

    if (sku) {
      fetchProduct()
    }
  }, [sku])

  return { product, loading, error }
}

export const useCategories = () => {
  const [categories, setCategories] = useState<MagentoCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const data = await magentoApi.categories.getAll()
        setCategories(data)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch categories')
        )
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}

export const useCart = (token: string) => {
  const [cart, setCart] = useState<MagentoCart | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchCart = async () => {
    try {
      setLoading(true)
      const data = await magentoApi.cart.getCart(token)
      setCart(data)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch cart'))
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (sku: string, qty: number) => {
    try {
      setLoading(true)
      await magentoApi.cart.addItem(token, { sku, qty })
      await fetchCart() // Refresh cart after adding item
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to add item to cart')
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      fetchCart()
    }
  }, [token])

  return { cart, loading, error, addToCart, refreshCart: fetchCart }
}

export const useCustomer = (token: string) => {
  const [customer, setCustomer] = useState<MagentoCustomer | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        setLoading(true)
        const data = await magentoApi.customer.getCurrentCustomer(token)
        setCustomer(data)
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch customer')
        )
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchCustomer()
    }
  }, [token])

  return { customer, loading, error }
}
