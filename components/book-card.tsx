"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BookCardProps {
  id: string
  title: string
  author: string
  price: number
  coverUrl: string
  className?: string
}

export default function BookCard({ id, title, author, price, coverUrl, className }: BookCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Link href={`/book/${id}`} className="group">
        <div className="relative aspect-[2/3] h-36 overflow-hidden rounded-md mb-2 bg-white shadow-sm">
          <Image
            src={coverUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="font-medium line-clamp-1 text-xs">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-1">{author}</p>
        <p className="text-xs font-medium mt-1">{Math.round(price * 1000).toLocaleString("en-US")} S.P</p>
      </Link>
      <Button
        size="sm"
        className="mt-1 w-full text-xs bg-brand-DEFAULT hover:bg-brand-medium text-black"
        onClick={() => console.log(`Added ${title} to cart`)}
      >
        <ShoppingCart className="h-3 w-3 mr-1" />
        Add to Cart
      </Button>
    </div>
  )
}
