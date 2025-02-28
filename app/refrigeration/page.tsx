import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'ref-001',
    name: 'Commercial Refrigerator',
    price: 3999.99,
    image: '/placeholder.svg',
  },
  {
    id: 'ref-002',
    name: 'Walk-in Cooler System',
    price: 5999.99,
    image: '/placeholder.svg',
  },
  {
    id: 'ref-003',
    name: 'Display Case Refrigerator',
    price: 2899.99,
    image: '/placeholder.svg',
  },
  {
    id: 'ref-004',
    name: 'Ice Machine',
    price: 1999.99,
    image: '/placeholder.svg',
  },
]

export default function RefrigerationPage() {
  return (
    <ProductCategoryPage
      title="Refrigeration"
      description="Explore our comprehensive range of commercial and industrial refrigeration solutions designed for optimal performance and reliability."
      products={mockProducts}
    />
  )
}
