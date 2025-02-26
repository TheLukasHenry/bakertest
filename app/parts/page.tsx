import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'part-001',
    name: 'Replacement Coil',
    price: 299.99,
    image: '/placeholder.svg',
  },
  {
    id: 'part-002',
    name: 'Compressor Kit',
    price: 599.99,
    image: '/placeholder.svg',
  },
  {
    id: 'part-003',
    name: 'Filter Set',
    price: 49.99,
    image: '/placeholder.svg',
  },
  {
    id: 'part-004',
    name: 'Thermostat Assembly',
    price: 129.99,
    image: '/placeholder.svg',
  },
]

export default function PartsPage() {
  return (
    <ProductCategoryPage
      title="Parts & Accessories"
      description="Find genuine replacement parts and accessories for all your HVAC and refrigeration equipment needs."
      products={mockProducts}
    />
  )
}
