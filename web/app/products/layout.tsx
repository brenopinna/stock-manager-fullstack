import NavigationBar from "@/components/NavigationBar/NavigationBar"
import Title from "@/components/Title"

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      <Title>Estoque</Title>
      <NavigationBar />
      {children}
    </div>
  )
}
