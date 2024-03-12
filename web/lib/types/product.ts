export interface Product {
  _id: string
  name: string
  amount: number
  price: number
  category: string
  description: string
  createdAt: Date
  updatedAt?: Date
}
