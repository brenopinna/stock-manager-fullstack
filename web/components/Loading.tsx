import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <p className="flex justify-center">
      <Loader2 size={60} className="animate-spin" />
    </p>
  )
}
