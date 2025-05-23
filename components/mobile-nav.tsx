"use client"

import type React from "react"
import Link from "next/link"
import { BookOpen, Home, Search, ShoppingCart } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"

export default function MobileNav() {
  const pathname = usePathname()
  const { itemCount } = useCart()

  return (
    <nav className="sticky bottom-0 z-10 bg-white border-t">
      <div className="grid grid-cols-4 h-16">
        <NavItem href="/" icon={<Home className="h-5 w-5" />} label="Home" active={pathname === "/"} />
        <NavItem
          href="/browse"
          icon={<BookOpen className="h-5 w-5" />}
          label="Browse"
          active={pathname === "/browse"}
        />
        <NavItem href="/search" icon={<Search className="h-5 w-5" />} label="Search" active={pathname === "/search"} />
        <NavItem
          href="/cart"
          icon={
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-DEFAULT text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </div>
          }
          label="Cart"
          active={pathname === "/cart"}
        />
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
