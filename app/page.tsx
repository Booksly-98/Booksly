import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import BookCard from "@/components/book-card"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
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
            <Input
              type="search"
              placeholder="Search for books..."
              className="w-full pl-10 pr-4 py-2 rounded-full border-brand-lavender focus-visible:ring-brand-DEFAULT"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-DEFAULT">New Releases</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <BookCard
                id="5"
                title="Fourth Wing"
                author="Rebecca Yarros"
                price={15.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="6"
                title="Tomorrow Will Be Better"
                author="Sarah Smith"
                price={10.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="7"
                title="The Seven Husbands of Evelyn Hugo"
                author="Taylor Jenkins Reid"
                price={13.49}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="8"
                title="Where the Crawdads Sing"
                author="Delia Owens"
                price={11.49}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="13"
                title="The Last Thing He Told Me"
                author="Laura Dave"
                price={12.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="14"
                title="The Invisible Life of Addie LaRue"
                author="V.E. Schwab"
                price={14.49}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="15"
                title="The Paris Apartment"
                author="Lucy Foley"
                price={13.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="16"
                title="Book Lovers"
                author="Emily Henry"
                price={12.49}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-DEFAULT">Book Series</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <BookCard
                id="9"
                title="Harry Potter and the Philosopher's Stone"
                author="J.K. Rowling"
                price={16.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="10"
                title="The Fellowship of the Ring"
                author="J.R.R. Tolkien"
                price={18.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="11"
                title="A Game of Thrones"
                author="George R.R. Martin"
                price={17.49}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="12"
                title="The Hunger Games"
                author="Suzanne Collins"
                price={14.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="17"
                title="Dune"
                author="Frank Herbert"
                price={15.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="18"
                title="The Lightning Thief"
                author="Rick Riordan"
                price={13.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="19"
                title="Twilight"
                author="Stephenie Meyer"
                price={12.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="20"
                title="Divergent"
                author="Veronica Roth"
                price={13.49}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-DEFAULT">Featured Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <BookCard
                id="1"
                title="The Midnight Library"
                author="Matt Haig"
                price={12.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="2"
                title="Atomic Habits"
                author="James Clear"
                price={14.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="3"
                title="Project Hail Mary"
                author="Andy Weir"
                price={13.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="4"
                title="The Silent Patient"
                author="Alex Michaelides"
                price={11.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="21"
                title="Educated"
                author="Tara Westover"
                price={15.49}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="22"
                title="Becoming"
                author="Michelle Obama"
                price={16.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="23"
                title="The Alchemist"
                author="Paulo Coelho"
                price={11.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
              <BookCard
                id="24"
                title="The Song of Achilles"
                author="Madeline Miller"
                price={13.99}
                coverUrl="/placeholder.svg?height=240&width=160"
              />
            </div>
          </div>
        </section>
      </main>
      <MobileNav />
    </div>
  )
}
