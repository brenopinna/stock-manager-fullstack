"use client"

import Button from "./Button"
import { api } from "@/lib/api"
import { usePathname, useRouter } from "next/navigation"

interface ButtonDeleteProps {
  id: string
  name: string
}

export default function ButtonDelete({ id, name }: ButtonDeleteProps) {
  const router = useRouter()
  const path = usePathname()

  function handleClick() {
    const option = confirm(`Tem certeza que deseja excluir o item "${name}" ?`)
    if (option)
      api
        .delete(`/products/${id}`)
        .then(() => {
          alert("Item deletado com sucesso.")
          if (path === "/products") {
            router.push("/")
          } else {
            router.push("/products")
          }
        })
        .catch((error) => {
          alert("Houve um erro ao deletar. Tente novamente.")
          console.log(error)
        })
  }

  return (
    <Button onClick={() => handleClick()} className="bg-red-600">
      Excluir
    </Button>
  )
}
