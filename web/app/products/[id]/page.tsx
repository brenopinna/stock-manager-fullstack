"use client"

import { useEffect, useState } from "react"
import { notFound, useParams } from "next/navigation"
import dayjs from "dayjs"

import { api } from "@/lib/api"
import { Product } from "@/lib/types/product"

import ButtonDelete from "@/components/Button/ButtonDelete"
import ButtonUpdate from "@/components/Button/ButtonUpdate"
import Loading from "@/components/Loading"

export default function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState<Product>()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then(({ data }) => {
        setProduct(data)
      })
      .catch((error) => {
        console.error(error)
        notFound()
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!product) {
    return (
      <p>Não foi possível encontrar o produto. Recarregue a página e tente novamente.</p>
    )
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-4">
        <span className="mr-6 font-extralight text-2xl overflow-x-scroll">
          {product.name}
        </span>
        <span className="space-x-4">
          <ButtonUpdate id={product._id} />
          <ButtonDelete name={product.name} id={product._id} />
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        <span className="bg-[#1C1A1D] shadow-md rounded-md px-5 py-3">
          Categoria: {product.category}
        </span>
        <span className="bg-[#1C1A1D] shadow-md rounded-md px-5 py-3">
          Quantidade em estoque: {product.amount}
        </span>
        <span className="bg-[#1C1A1D] shadow-md rounded-md px-5 py-3">
          Preço:{" "}
          {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
            product.price,
          )}
        </span>
      </div>
      <p>{product.description}</p>
      <p>Cadastrado em: {dayjs(product.createdAt).format("DD/MM/YYYY, [às] HH:mm")}</p>
    </div>
  )
}
