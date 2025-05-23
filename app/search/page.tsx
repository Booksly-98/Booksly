"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Filter, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import BookCard from "@/components/book-card"
import MobileNav from "@/components/mobile-nav"
import { searchBooks } from "@/lib/data"
import type { Book, SearchFilters } from "@/lib/types"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Book[]>([])
  const [filters, setFilters] = useState<SearchFilters>({
    minPrice: 0,
    maxPrice: 30000,
  })
  const [priceRange, setPriceRange] = useState([0, 30000])
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Perform search when query or filters change
  useEffect(() => {
    const searchResults = searchBooks(query, filters)
    setResults(searchResults)

    // Update active filters
    const newActiveFilters = []
    if (filters.minPrice && filters.minPrice > 0) {
      newActiveFilters.push(`Min: ${filters.minPrice.toLocaleString()} S.P`)
    }
    if (filters.maxPrice && filters.maxPrice < 30000) {
      newActiveFilters.push(`Max: ${filters.maxPrice.toLocaleString()} S.P`)
    }
    setActiveFilters(newActiveFilters)
  }, [query, filters])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Update URL with search query
    const url = new URL(window.location.href)
    url.searchParams.set("q", query)
    window.history.pushState({}, "", url)
  }

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values)
  }

  const applyPriceFilter = () => {
    setFilters((prev) => ({
      ...prev,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    }))
  }

  const clearFilters = () => {
    setPriceRange([0, 30000])
    setFilters({
      minPrice: 0,
      maxPrice: 30000,
    })
  }

  const removeFilter = (filter: string) => {
    if (filter.startsWith("Min:")) {
      setFilters((prev) => ({ ...prev, minPrice: 0 }))
      setPriceRange([0, priceRange[1]])
    } else if (filter.startsWith("Max:")) {
      setFilters((prev) => ({ ...prev, maxPrice: 30000 }))
      setPriceRange([priceRange[0], 30000])
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-5 w-5 text-brand-DEFAULT" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <form onSubmit={handleSearch} className="flex-1 relative">
            <Input
              type="search"
              placeholder="Search for books..."
              className="w-full pl-10 pr-4 py-2 rounded-full border-brand-lavender focus-visible:ring-brand-DEFAULT"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </form>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Filter className="h-5 w-5 text-brand-DEFAULT" />
                <span className="sr-only">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Refine your search results</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="mb-6">
                  <Slider
                    defaultValue={[0, 30000]}
                    min={0}
                    max={30000}
                    step={1000}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>{priceRange[0].toLocaleString()} S.P</span>
                    <span>{priceRange[1].toLocaleString()} S.P</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setPriceRange([0, 10000])
                      setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: 10000 }))
                    }}
                  >
                    Under 10,000 S.P
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setPriceRange([10000, 15000])
                      setFilters((prev) => ({ ...prev, minPrice: 10000, maxPrice: 15000 }))
                    }}
                  >
                    10,000 - 15,000 S.P
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setPriceRange([15000, 20000])
                      setFilters((prev) => ({ ...prev, minPrice: 15000, maxPrice: 20000 }))
                    }}
                  >
                    15,000 - 20,000 S.P
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setPriceRange([20000, 30000])
                      setFilters((prev) => ({ ...prev, minPrice: 20000, maxPrice: 30000 }))
                    }}
                  >
                    Over 20,000 S.P
                  </Button>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button
                    variant="default"
                    className="flex-1 bg-brand-DEFAULT hover:bg-brand-medium"
                    onClick={applyPriceFilter}
                  >
                    Apply
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                {filter}
                <button
                  className="ml-1 h-4 w-4 rounded-full bg-muted-foreground/20 flex items-center justify-center text-muted-foreground"
                  onClick={() => removeFilter(filter)}
                >
                  ×
                </button>
              </Badge>
            ))}
            <Button variant="ghost" size="sm" className="text-xs h-6" onClick={clearFilters}>
              Clear All
            </Button>
          </div>
        )}

        <div className="mb-4">
          <h2 className="text-lg font-medium">
            {results.length} {results.length === 1 ? "result" : "results"} {query ? `for "${query}"` : ""}
          </h2>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((book) => (
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
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2 text-brand-DEFAULT">No results found</h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button asChild className="bg-brand-DEFAULT hover:bg-brand-medium">
              <Link href="/">Browse All Books</Link>
            </Button>
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  )
}
