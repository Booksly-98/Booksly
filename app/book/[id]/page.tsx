import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

interface BookPageProps {
  params: {
    id: string
  }
}

export default function BookPage({ params }: BookPageProps) {
  // In a real app, you would fetch book data based on the ID
  const book = {
    id: params.id,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 12.99,
    rating: 4.5,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    pages: 304,
    published: "August 13, 2020",
    publisher: "Viking",
    isbn: "9780525559474",
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="icon" asChild className="mr-auto">
            <Link href="/">
              <ArrowLeft className="h-5 w-5 text-brand-DEFAULT" />
              <span className="sr-only">Back to Booksly</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5 text-brand-DEFAULT" />
            <span className="sr-only">Favorite</span>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 text-brand-DEFAULT" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        <div className="flex flex-col items-center mb-6">
          <div className="relative aspect-[2/3] w-48 mb-4 bg-white shadow-md rounded-md overflow-hidden">
            <Image src={book.coverUrl || "/placeholder.svg"} alt={book.title} fill className="object-cover" priority />
          </div>

          <h1 className="text-xl font-bold text-center text-brand-DEFAULT">{book.title}</h1>
          <p className="text-muted-foreground mb-2">{book.author}</p>

          <div className="flex items-center mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(book.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            <span className="ml-1 text-sm">{book.rating}</span>
          </div>

          <p className="text-lg font-bold mb-4">{Math.round(book.price * 1000).toLocaleString("en-US")} S.P</p>

          <div className="flex gap-3 w-full">
            <Button className="flex-1 bg-brand-DEFAULT hover:bg-brand-medium">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-pale">
              Buy Now
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-brand-DEFAULT">Description</h2>
          <p className="text-sm text-muted-foreground">{book.description}</p>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-lg font-bold mb-2 text-brand-DEFAULT">Details</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Pages</div>
            <div>{book.pages}</div>

            <div className="text-muted-foreground">Published</div>
            <div>{book.published}</div>

            <div className="text-muted-foreground">Publisher</div>
            <div>{book.publisher}</div>

            <div className="text-muted-foreground">ISBN</div>
            <div>{book.isbn}</div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
