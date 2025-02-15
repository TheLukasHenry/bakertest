export interface MagentoProduct {
  id: number
  sku: string
  name: string
  price: number
  status: number
  visibility: number
  type_id: string
  created_at: string
  updated_at: string
  extension_attributes?: Record<string, any>
  custom_attributes?: Array<{
    attribute_code: string
    value: string | number
  }>
  media_gallery_entries?: Array<{
    id: number
    media_type: string
    label: string
    position: number
    disabled: boolean
    types: string[]
    file: string
  }>
}

export interface MagentoCategory {
  id: number
  parent_id: number
  name: string
  is_active: boolean
  position: number
  level: number
  children: string
  created_at: string
  updated_at: string
  path: string
  available_sort_by: string[]
  include_in_menu: boolean
}

export interface MagentoCart {
  id: string
  items: MagentoCartItem[]
  total_items: number
  total_quantity: number
  grand_total: number
}

export interface MagentoCartItem {
  item_id: number
  sku: string
  qty: number
  name: string
  price: number
  product_type: string
  quote_id: string
}

export interface MagentoCustomer {
  id: number
  group_id: number
  email: string
  firstname: string
  lastname: string
  store_id: number
  website_id: number
  addresses?: MagentoAddress[]
}

export interface MagentoAddress {
  id: number
  customer_id: number
  region: {
    region_code: string
    region: string
    region_id: number
  }
  region_id: number
  country_id: string
  street: string[]
  telephone: string
  postcode: string
  city: string
  firstname: string
  lastname: string
  default_shipping?: boolean
  default_billing?: boolean
}
