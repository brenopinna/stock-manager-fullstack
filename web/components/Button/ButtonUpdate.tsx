import Link from "next/link"
import Button from "./Button"

interface ButtonUpdateProps {
  id: string
}

export default function ButtonUpdate({ id }: ButtonUpdateProps) {
  return (
    <Link href={`/products/${id}/edit`}>
      <Button className="bg-[#06b6d4]">Atualizar</Button>
    </Link>
  )
}
