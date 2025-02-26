import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'motor-001',
    name: 'ECM Blower Motor',
    price: 399.99,
    image: '/placeholder.svg',
  },
  {
    id: 'motor-002',
    name: 'Condenser Fan Motor',
    price: 199.99,
    image: '/placeholder.svg',
  },
  {
    id: 'motor-003',
    name: 'Variable Speed Motor',
    price: 499.99,
    image: '/placeholder.svg',
  },
  {
    id: 'motor-004',
    name: 'PSC Motor',
    price: 149.99,
    image: '/placeholder.svg',
  },
]

export default function MotorsPage() {
  return (
    <ProductCategoryPage
      title="Motors"
      description="Discover our comprehensive range of motors for HVAC systems and other applications, including ECM, PSC, and variable speed options."
      products={mockProducts}
    />
  )
}
