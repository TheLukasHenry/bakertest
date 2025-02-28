import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'therm-001',
    name: 'Smart WiFi Thermostat',
    price: 249.99,
    image: '/placeholder.svg',
  },
  {
    id: 'therm-002',
    name: 'Programmable Thermostat',
    price: 129.99,
    image: '/placeholder.svg',
  },
  {
    id: 'therm-003',
    name: 'Multi-Zone Controller',
    price: 399.99,
    image: '/placeholder.svg',
  },
  {
    id: 'therm-004',
    name: 'Digital Non-Programmable Thermostat',
    price: 79.99,
    image: '/placeholder.svg',
  },
]

export default function ThermostatsPage() {
  return (
    <ProductCategoryPage
      title="Thermostats"
      description="Control your comfort with our selection of smart, programmable, and traditional thermostats for residential and commercial applications."
      products={mockProducts}
    />
  )
}
