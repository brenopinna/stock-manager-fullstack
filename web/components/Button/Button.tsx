import { ButtonHTMLAttributes } from "react"

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children } = props
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md w-fit hover:bg-opacity-75 transition-all ${className}`}>
      {children}
    </button>
  )
}
