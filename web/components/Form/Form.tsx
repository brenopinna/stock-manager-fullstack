"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, FormEvent, useEffect, useRef } from "react"

import { api } from "@/lib/api"
import { FormDataType } from "@/lib/types/form-data"
import { Product } from "@/lib/types/product"

import Button from "../Button/Button"
import NewItemInput from "./NewItemInput/NewItemInput"
import NewItemInputField from "./NewItemInput/NewItemInputField"
import Loading from "../Loading"

interface FormProps {
  action: "edit" | "create"
}

export default function Form({ action }: FormProps) {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    amount: "",
    price: "",
    category: "",
    description: "",
  })

  const [loading, setLoading] = useState(() => action === "edit")

  const formRef = useRef<HTMLFormElement>(null)

  const router = useRouter()

  const { id } = useParams()

  useEffect(() => {
    if (action === "edit") {
      api
        .get(`/products/${id}`)
        .then(({ data }: { data: Product }) => {
          setFormData({
            name: data.name,
            amount: data.amount,
            price: data.price,
            category: data.category,
            description: data.description,
          })
        })
        .catch((error) => {
          alert("Falha ao requisitar informações originais do produto. Tente novamente.")
          console.error(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleChange() {
    setFormData((formData) => {
      const data = new FormData(formRef.current!)
      return Array.from(data.keys()).reduce((acc, key) => {
        const value = data.get(key)
        return { ...acc, [key]: value }
      }, formData)
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (action === "create") {
      api
        .post("/products", formData)
        .then(() => {
          alert("Produto adicionado com sucesso.")
          router.push("/")
        })
        .catch((error) => {
          alert("Erro ao adicionar o produto. Tente novamente.")
          console.error(error)
        })
    } else if (action === "edit") {
      api
        .put(`/products/${id}`, formData)
        .then(() => {
          alert("Produto editado com sucesso.")
          router.push(`/products/${id}`)
        })
        .catch((error) => {
          alert("Erro ao editar o produto. Tente novamente.")
          console.error(error)
        })
    }
  }

  if (loading) return <Loading />

  return (
    <div className="max-w-4xl w-full mx-auto">
      <form onChange={handleChange} ref={formRef} onSubmit={handleSubmit}>
        <legend
          className={`block font-extralight text-2xl mb-8 ${
            action === "create" && "hidden"
          }`}>
          {action === "create" ? "Adicionar" : "Editar"} produto
        </legend>
        <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-4">
          <NewItemInputField>
            <label htmlFor="name">Nome</label>
            <NewItemInput value={formData.name} name="name" id="name" />
          </NewItemInputField>
          <NewItemInputField>
            <label htmlFor="amount">Quantidade</label>
            <NewItemInput
              value={formData.amount}
              type="number"
              name="amount"
              id="amount"
              step={1}
              min={1}
            />
          </NewItemInputField>
          <NewItemInputField>
            <label htmlFor="price">Preço</label>
            <NewItemInput
              value={formData.price}
              type="number"
              name="price"
              id="price"
              step={0.01}
              min={0.01}
            />
          </NewItemInputField>
          <NewItemInputField>
            <label htmlFor="category">Categoria</label>
            <NewItemInput value={formData.category} name="category" id="category" />
          </NewItemInputField>
          <NewItemInputField className="col-span-full">
            <label htmlFor="description">Descrição</label>
            <textarea
              value={formData.description}
              className="h-36 resize-none bg-[#1C1A1D] rounded-md w-full focus:outline-none px-3 py-2"
              name="description"
              id="description"
            />
          </NewItemInputField>
          <Button type="submit" className="bg-[#0891B2]">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  )
}
