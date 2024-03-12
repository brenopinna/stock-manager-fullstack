import { LinkHTMLAttributes } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavigationBarLink({
  children,
  href,
}: LinkHTMLAttributes<HTMLLinkElement>) {
  const currentPath = usePathname()

  return (
    <Link
      href={href!}
      className={`hover:text-gray-300 transition-all px-4 py-2 relative after:w-full after:h-0.5 after:absolute after:top-full after:left-0 ${
        href === currentPath && "after:bg-gray-300"
      }  `}>
      {children}
    </Link>
  )
}
