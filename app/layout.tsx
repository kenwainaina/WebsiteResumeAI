import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ken's Portfolio",
  description: "Interactive Design & AI Management Student",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-georgetown relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#041E42]/10 bg-no-repeat bg-bottom opacity-10 pointer-events-none" />
        <Navbar />
        <main className="flex-grow pt-16 relative z-10">{children}</main>
      </body>
    </html>
  )
}
