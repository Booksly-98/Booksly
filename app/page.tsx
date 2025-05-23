import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import BookCard from "@/components/book-card"
import MobileNav from "@/components/mobile-nav"
import { getNewReleases, getBookSeries, getFeaturedBooks } from "@/lib/data"

export default function Home() {
  const newReleases = getNewReleases()
  const bookSeries = getBookSeries()
  const featuredBooks = getFeaturedBooks()

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image src="/images/booksly-logo.jpg" alt="Booksly" fill className="object-contain" />
            </div>
            <span className="font-bold text-brand-DEFAULT">Booksly</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search">
                <Search className="w-5 h-5 text-brand-DEFAULT" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5 text-brand-DEFAULT" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-6 px-4">
          <div className="relative mb-6">
            <form action="/search" method="GET">
              <Input
                type="search"
                name="q"
                placeholder="Search for books..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-brand-lavender focus-visible:ring-brand-DEFAULT"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-DEFAULT">New Releases</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {newReleases.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  coverUrl={book.coverUrl}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-DEFAULT">Book Series</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {bookSeries.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  coverUrl={book.coverUrl}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-DEFAULT">Featured Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {featuredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  coverUrl={book.coverUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <MobileNav />
    </div>
  )
}
