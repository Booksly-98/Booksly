export interface Book {
  id: string
  title: string
  author: string
  price: number
  coverUrl: string
  description?: string
  rating?: number
  pages?: number
  published?: string
  publisher?: string
  isbn?: string
  inStock?: boolean
  series?: string
}

export interface CartItem {
  bookId: string
  quantity: number
}

export interface SearchFilters {
  minPrice?: number
  maxPrice?: number
  query?: string
}
