import ProductCategoryPage from '../components/product-category-page'

const mockProducts = [
  {
    id: 'food-001',
    name: 'Commercial Kitchen Hood',
    price: 2499.99,
    image: '/placeholder.svg',
  },
  {
    id: 'food-002',
    name: 'Restaurant Ventilation System',
    price: 3999.99,
    image: '/placeholder.svg',
  },
  {
    id: 'food-003',
    name: 'Kitchen Air Purification Unit',
    price: 1599.99,
    image: '/placeholder.svg',
  },
  {
    id: 'food-004',
    name: 'Grease Filter System',
    price: 899.99,
    image: '/placeholder.svg',
  },
]

export default function FoodservicePage() {
  return (
    <ProductCategoryPage
      title="Foodservice"
      description="Discover our selection of high-quality foodservice equipment and ventilation solutions designed specifically for commercial kitchens and restaurants."
      products={mockProducts}
    />
  )
}
