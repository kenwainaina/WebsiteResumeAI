import type React from "react"
import { Inter } from "next/font/google"
import "./app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ken's Resume",
  description: "SMAD & CIS Student at James Madison University",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
