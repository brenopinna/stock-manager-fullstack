import Link from "next/link"

export default function EmptyStock() {
  return (
    <p className="text-xl">
      Parece que você ainda não possui itens no estoque.{" "}
      <Link className="underline hover:text-gray-300 transition-all" href="/products/new">
        Clique aqui
      </Link>{" "}
      para adicionar.
    </p>
  )
}
