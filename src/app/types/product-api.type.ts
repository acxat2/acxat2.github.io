export interface HttpProduct {
  id: number,
  company: string,
  title: string,
  price: number,
  image: string,
  rating?: number,
  category: string,
  favorite?: boolean
}

export interface meta {
  currentPage: number,
  itemCount: number,
  itemsPerPage: number,
  totalItems: number,
  totalPages: number
}
