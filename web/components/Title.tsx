interface TitleProps {
  children: string
}

export default function Title({ children }: TitleProps) {
  return <h1 className="text-5xl font-extralight">{children}</h1>
}
