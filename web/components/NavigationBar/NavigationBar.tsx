"use client"

import { usePathname } from "next/navigation"
import NavigationBarLink from "./NavigationBarLink"

export default function NavigationBar() {
  const path = usePathname()

  if (!["/products", "/products/new"].includes(path)) return

  return (
    <div className="flex border-b-2 border-b-gray-500">
      <NavigationBarLink href="/products">Todos os produtos</NavigationBarLink>
      <NavigationBarLink href="/products/new">Adicionar novo produto</NavigationBarLink>
    </div>
  )
}
