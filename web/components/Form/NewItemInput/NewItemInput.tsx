import { InputHTMLAttributes } from "react"

export default function NewItemInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      {...props}
      className={`bg-[#1C1A1D] rounded-md w-full focus:outline-none px-3 py-2`}
    />
  )
}
