import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'tool-001',
    name: 'Digital Manifold Gauge',
    price: 299.99,
    image: '/placeholder.svg',
  },
  {
    id: 'tool-002',
    name: 'Refrigerant Recovery Machine',
    price: 899.99,
    image: '/placeholder.svg',
  },
  {
    id: 'tool-003',
    name: 'Vacuum Pump',
    price: 249.99,
    image: '/placeholder.svg',
  },
  {
    id: 'tool-004',
    name: 'Multimeter',
    price: 149.99,
    image: '/placeholder.svg',
  },
]

export default function ToolsPage() {
  return (
    <ProductCategoryPage
      title="Tools & Instruments"
      description="Find professional-grade tools and diagnostic instruments for HVAC installation, maintenance, and repair."
      products={mockProducts}
    />
  )
}
