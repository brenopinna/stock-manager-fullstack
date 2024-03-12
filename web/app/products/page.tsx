"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { Product } from "@/lib/types/product"

import EmptyStock from "@/components/EmptyStock"
import Table from "@/components/Table"
import Loading from "@/components/Loading"

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get("/products")
      .then(({ data }) => {
        setProducts(data), setLoading(false)
      })
      .catch((error) => {
        throw error
      })
  }, [])

  if (loading) return <Loading />

  if (!products.length) return <EmptyStock />

  return (
    <div className="overflow-x-scroll">
      <Table
        {...{
          columns: ["Nome", "ID", "Em estoque", "Categoria"],
          products: products.map((product) => ({
            ID: product._id,
            data: [product.name, product._id, product.amount, product.category],
          })),
          actions: ["delete", "update"],
        }}
      />
    </div>
  )
}
