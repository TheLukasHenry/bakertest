import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'comp-001',
    name: 'Scroll Compressor',
    price: 899.99,
    image: '/placeholder.svg',
  },
  {
    id: 'comp-002',
    name: 'Reciprocating Compressor',
    price: 1299.99,
    image: '/placeholder.svg',
  },
  {
    id: 'comp-003',
    name: 'Rotary Compressor',
    price: 749.99,
    image: '/placeholder.svg',
  },
  {
    id: 'comp-004',
    name: 'Screw Compressor',
    price: 1599.99,
    image: '/placeholder.svg',
  },
]

export default function CompressorsPage() {
  return (
    <ProductCategoryPage
      title="Compressors"
      description="Browse our selection of high-quality compressors for various HVAC and refrigeration applications."
      products={mockProducts}
    />
  )
}
