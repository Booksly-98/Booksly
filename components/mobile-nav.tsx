import type React from "react"
import Link from "next/link"
import { BookOpen, Home, Search, ShoppingCart } from "lucide-react"

import { cn } from "@/lib/utils"

export default function MobileNav() {
  return (
    <nav className="sticky bottom-0 z-10 bg-white border-t">
      <div className="grid grid-cols-4 h-16">
        <NavItem href="/" icon={<Home className="h-5 w-5" />} label="Home" />
        <NavItem href="/browse" icon={<BookOpen className="h-5 w-5" />} label="Browse" />
        <NavItem href="/search" icon={<Search className="h-5 w-5" />} label="Search" />
        <NavItem href="/cart" icon={<ShoppingCart className="h-5 w-5" />} label="Cart" />
      </div>
    </nav>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ href, icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center text-xs font-medium transition-colors",
        active ? "text-brand-DEFAULT" : "text-muted-foreground hover:text-brand-DEFAULT",
      )}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </Link>
  )
}
