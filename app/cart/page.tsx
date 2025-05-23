import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import MobileNav from "@/components/mobile-nav"

export default function CartPage() {
  // In a real app, you would fetch cart data
  const cartItems = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 12.99,
      quantity: 1,
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
    {
      id: "3",
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: 13.99,
      quantity: 2,
      coverUrl: "/placeholder.svg?height=120&width=80",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 3.99
  const total = subtotal + shipping

  // Format price with commas for thousands
  const formatPrice = (price: number) => {
    return Math.round(price * 1000).toLocaleString("en-US")
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="icon" asChild className="mr-auto">
            <Link href="/">
              <ArrowLeft className="h-5 w-5 text-brand-DEFAULT" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="font-bold text-brand-DEFAULT">Shopping Cart</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="relative h-24 w-16 flex-shrink-0 bg-brand-pale rounded overflow-hidden">
                    <Image src={item.coverUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.author}</p>
                    <p className="text-sm font-medium mt-1">{formatPrice(item.price)} S.P</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md border-brand-lavender">
                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0 text-brand-DEFAULT">
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0 text-brand-DEFAULT">
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)} S.P</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatPrice(shipping)} S.P</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{formatPrice(total)} S.P</span>
              </div>
            </div>

            <Button className="w-full mb-3 bg-black hover:bg-gray-800 text-white">Proceed to Checkout</Button>
            <Button
              variant="outline"
              asChild
              className="w-full border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-pale"
            >
              <Link href="/">Continue Shopping with Booksly</Link>
            </Button>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2 text-brand-DEFAULT">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any books to your cart yet.</p>
            <Button asChild className="bg-brand-DEFAULT hover:bg-brand-medium">
              <Link href="/">Browse Books</Link>
            </Button>
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  )
}
