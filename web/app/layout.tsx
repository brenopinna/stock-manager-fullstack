import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Stock Manager",
  description: "A simple but powerful stock manager application.",
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className="h-screen">
        <div className="flex flex-col min-h-full bg-[#2C2C2D] text-white">
          <Header />
          <main className="grow px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
