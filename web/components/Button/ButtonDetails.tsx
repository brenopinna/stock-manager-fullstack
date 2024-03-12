import Link from "next/link"
import Button from "./Button"

interface ButtonDetailsProps {
  id: string
}

export default function ButtonDetails({ id }: ButtonDetailsProps) {
  return (
    <Link href={`/products/${id}`}>
      <Button className="bg-white text-black">Ver</Button>
    </Link>
  )
}
