export type Product = {
  id: string,
  name: string,
  article: string,
  code: string,
  time: string,
  role_ids: string[]
}

export type ProductsDto = {
  products: Product[],
  count: string
}
