import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-full grid place-items-center gap-4">
      <h1 className="text-5xl text-center font-medium">404: Página não encontrada!</h1>
      <AlertTriangle color="#ffb300" size={140} absoluteStrokeWidth strokeWidth={7} />
      <span>
        <Link href="/" className="underline text-xl hover:text-gray-300 transition-all">
          Voltar à página principal
        </Link>
      </span>
    </div>
  )
}
