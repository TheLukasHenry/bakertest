import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'iaq-001',
    name: 'HEPA Air Purifier',
    price: 599.99,
    image: '/placeholder.svg',
  },
  {
    id: 'iaq-002',
    name: 'UV-C Air Sanitizer',
    price: 799.99,
    image: '/placeholder.svg',
  },
  {
    id: 'iaq-003',
    name: 'Whole-House Humidifier',
    price: 349.99,
    image: '/placeholder.svg',
  },
  {
    id: 'iaq-004',
    name: 'Air Quality Monitor',
    price: 199.99,
    image: '/placeholder.svg',
  },
]

export default function IndoorAirQualityPage() {
  return (
    <ProductCategoryPage
      title="Indoor Air Quality"
      description="Improve your indoor air quality with our selection of air purifiers, sanitizers, humidifiers, and monitoring equipment."
      products={mockProducts}
    />
  )
}
