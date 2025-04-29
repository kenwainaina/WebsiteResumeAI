import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ken's Resume",
  description: "SMAD & CIS Student at James Madison University",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-br from-purple-950 via-red-950 to-purple-950`}
      >
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
      </body>
    </html>
  )
}
