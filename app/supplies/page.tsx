import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'sup-001',
    name: 'Refrigerant R-410A',
    price: 199.99,
    image: '/placeholder.svg',
  },
  {
    id: 'sup-002',
    name: 'Copper Line Set',
    price: 89.99,
    image: '/placeholder.svg',
  },
  {
    id: 'sup-003',
    name: 'Air Filters Bulk Pack',
    price: 49.99,
    image: '/placeholder.svg',
  },
  {
    id: 'sup-004',
    name: 'Duct Sealing Kit',
    price: 29.99,
    image: '/placeholder.svg',
  },
]

export default function SuppliesPage() {
  return (
    <ProductCategoryPage
      title="Supplies"
      description="Stock up on essential HVAC supplies including refrigerants, line sets, filters, and installation materials."
      products={mockProducts}
    />
  )
}
