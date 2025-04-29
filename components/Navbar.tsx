"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} passHref>
      <Button variant="ghost" className="text-gray-300 hover:text-white">
        {children}
      </Button>
    </Link>
  </li>
)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-purple-950/50 backdrop-blur-md w-full z-50 fixed top-0 left-0 right-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Ken&apos;s Portfolio
          </Link>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/projects">Current Projects</NavItem>
              <NavItem href="/games">Games & Coding</NavItem>
              <NavItem href="/classes">My Classes</NavItem>
            </ul>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Current Projects</NavItem>
            <NavItem href="/games">Games & Coding</NavItem>
            <NavItem href="/classes">My Classes</NavItem>
          </ul>
        </div>
      )}
    </nav>
  )
}
