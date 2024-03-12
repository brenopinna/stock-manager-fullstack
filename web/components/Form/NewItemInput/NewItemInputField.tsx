interface NewItemInputFieldProps {
  children: React.ReactNode
  className?: string
}

export default function NewItemInputField({
  children,
  className,
}: NewItemInputFieldProps) {
  return <div className={`space-y-2 ${className}`}>{children}</div>
}
