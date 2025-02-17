export const MAGENTO_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_MAGENTO_URL || 'http://localhost:3000',
  apiVersion: 'V1',
  storeCode: 'default',
  defaultHeaders: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

export const MAGENTO_ENDPOINTS = {
  products: '/rest/all/V1/products',
  categories: '/rest/all/V1/categories',
  cart: '/rest/V1/carts/mine',
  customer: '/rest/V1/customers',
  orders: '/rest/V1/orders',
}
