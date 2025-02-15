import { useState, useEffect } from 'react'
import { magentoApi } from '@/lib/services/magento-api'
import type {
  MagentoProduct,
  MagentoCategory,
  MagentoCart,
  MagentoCustomer,
} from '@/lib/types/magento'

export const useProducts = (searchCriteria?: Record<string, any>) => {
  const [products, setProducts] = useState<MagentoProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
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
  }, [searchCriteria])

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
