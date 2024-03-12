"use client"

import dayjs from "dayjs"

import { api } from "@/lib/api"
import { Product } from "@/lib/types/product"

import Card from "@/components/Card"
import EmptyStock from "@/components/EmptyStock"
import Table from "@/components/Table"
import Title from "@/components/Title"
import { useEffect, useState } from "react"
import Loading from "@/components/Loading"

export default function Home() {
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

  const diversity = products.length

  const totalAmount = products.reduce((acc, product) => {
    acc += product.amount
    return acc
  }, 0)

  const recentAmount = 4
  const recentProducts = products
    .sort((a, b) => dayjs(b.createdAt).diff(a.createdAt))
    .slice(0, recentAmount)

  const amountToRunOut = 2
  const runningOutProducts = products.filter(
    (product) => product.amount <= amountToRunOut,
  )

  return (
    <div className="flex flex-col gap-8">
      <Title>Dashboard</Title>
      <div className="grid place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card title="Diversidade de produtos" value={diversity} />
        <Card title="Inventário total" value={totalAmount} />
        <Card title="Produtos recentes" value={recentProducts.length} />
        <Card title="Produtos acabando" value={runningOutProducts.length} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Table
          {...{
            columns: ["Produtos recentes"],
            products: recentProducts.map((item) => ({ ID: item._id, data: [item.name] })),
          }}
        />
        {!!runningOutProducts.length && (
          <Table
            {...{
              columns: ["Produtos acabando", "Qtd."],
              products: runningOutProducts.map((item) => ({
                ID: item._id,
                data: [item.name, item.amount],
              })),
            }}
          />
        )}
      </div>
    </div>
  )
}
