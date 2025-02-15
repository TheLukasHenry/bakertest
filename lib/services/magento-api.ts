import { MAGENTO_CONFIG, MAGENTO_ENDPOINTS } from '../magento-config'
import type {
  MagentoProduct,
  MagentoCategory,
  MagentoCart,
  MagentoCustomer,
} from '../types/magento'

class MagentoApiError extends Error {
  constructor(message: string, public status?: number, public data?: any) {
    super(message)
    this.name = 'MagentoApiError'
  }
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new MagentoApiError(
      error.message || 'An error occurred',
      response.status,
      error
    )
  }
  return response.json()
}

export const magentoApi = {
  getAuthToken: async (username: string, password: string) => {
    const response = await fetch(
      `${MAGENTO_CONFIG.baseUrl}/rest/V1/integration/admin/token`,
      {
        method: 'POST',
        headers: MAGENTO_CONFIG.defaultHeaders,
        body: JSON.stringify({ username, password }),
      }
    )
    return handleResponse(response)
  },

  products: {
    getAll: async (
      searchCriteria?: Record<string, any>
    ): Promise<{ items: MagentoProduct[] }> => {
      const queryString = searchCriteria
        ? `?${new URLSearchParams(searchCriteria).toString()}`
        : ''
      const response = await fetch(
        `${MAGENTO_CONFIG.baseUrl}${MAGENTO_ENDPOINTS.products}${queryString}`,
        {
          headers: MAGENTO_CONFIG.defaultHeaders,
        }
      )
      return handleResponse(response)
    },

    getById: async (sku: string): Promise<MagentoProduct> => {
      const response = await fetch(
        `${MAGENTO_CONFIG.baseUrl}${MAGENTO_ENDPOINTS.products}/${sku}`,
        {
          headers: MAGENTO_CONFIG.defaultHeaders,
        }
      )
      return handleResponse(response)
    },
  },

  categories: {
    getAll: async (): Promise<MagentoCategory[]> => {
      const response = await fetch(
        `${MAGENTO_CONFIG.baseUrl}${MAGENTO_ENDPOINTS.categories}`,
        {
          headers: MAGENTO_CONFIG.defaultHeaders,
        }
      )
      return handleResponse(response)
    },

    getById: async (id: number): Promise<MagentoCategory> => {
      const response = await fetch(
        `${MAGENTO_CONFIG.baseUrl}${MAGENTO_ENDPOINTS.categories}/${id}`,
        {
          headers: MAGENTO_CONFIG.defaultHeaders,
        }
      )
      return handleResponse(response)
    },
  },

  cart: {
    getCart: async (token: string): Promise<MagentoCart> => {
      const response = await fetch(
        `${MAGENTO_CONFIG.baseUrl}${MAGENTO_ENDPOINTS.cart}`,
        {
          headers: {
            ...MAGENTO_CONFIG.defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      return handleResponse(response)
    },

    addItem: async (
      token: string,
      cartItem: {
        sku: string
        qty: number
      }
    ): Promise<MagentoCart> => {
      const response = await fetch(
        `${MAGENTO_CONFIG.baseUrl}${MAGENTO_ENDPOINTS.cart}/items`,
        {
          method: 'POST',
          headers: {
            ...MAGENTO_CONFIG.defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cartItem: {
              ...cartItem,
              quote_id: 'mine',
            },
          }),
        }
      )
      return handleResponse(response)
    },
  },

  customer: {
    getCurrentCustomer: async (token: string): Promise<MagentoCustomer> => {
      const response = await fetch(
        `${MAGENTO_CONFIG.baseUrl}${MAGENTO_ENDPOINTS.customer}/me`,
        {
          headers: {
            ...MAGENTO_CONFIG.defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      return handleResponse(response)
    },
  },
}
