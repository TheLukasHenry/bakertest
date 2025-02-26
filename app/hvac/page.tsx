import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'hvac-001',
    name: 'High-Efficiency Air Conditioner',
    price: 2499.99,
    image: '/placeholder.svg',
  },
  {
    id: 'hvac-002',
    name: 'Smart Heat Pump System',
    price: 3299.99,
    image: '/placeholder.svg',
  },
  {
    id: 'hvac-003',
    name: 'Ductless Mini-Split AC',
    price: 1899.99,
    image: '/placeholder.svg',
  },
  {
    id: 'hvac-004',
    name: 'Commercial HVAC Unit',
    price: 5499.99,
    image: '/placeholder.svg',
  },
]

export default function HVACPage() {
  return (
    <ProductCategoryPage
      title="HVAC Equipment"
      description="Browse our selection of high-quality heating, ventilation, and air conditioning systems for residential and commercial applications."
      products={mockProducts}
    />
  )
}
