import Link from "next/link"

export default function Header() {
  return (
    <header className="px-8 py-6 flex justify-between">
      <Link href="/">
        <p className="uppercase font-bold">React Stock</p>
      </Link>
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-gray-300 transition-all">
          Início
        </Link>
        <Link href="/products" className="hover:text-gray-300 transition-all">
          Produtos
        </Link>
      </nav>
    </header>
  )
}
