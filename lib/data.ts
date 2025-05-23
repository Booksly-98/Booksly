import type { Book } from "./types"

export interface SearchFilters {
  minPrice?: number
  maxPrice?: number
}

export const books: Book[] = [
  {
    id: "1",
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
    inStock: true,
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: 14.99,
    rating: 4.8,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    pages: 320,
    published: "October 16, 2018",
    publisher: "Avery",
    isbn: "9780735211292",
    inStock: true,
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 13.99,
    rating: 4.7,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
    pages: 496,
    published: "May 4, 2021",
    publisher: "Ballantine Books",
    isbn: "9780593135204",
    inStock: true,
  },
  {
    id: "4",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 11.99,
    rating: 4.3,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    pages: 336,
    published: "February 5, 2019",
    publisher: "Celadon Books",
    isbn: "9781250301697",
    inStock: true,
  },
  {
    id: "5",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    price: 15.99,
    rating: 4.6,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders.",
    pages: 512,
    published: "May 2, 2023",
    publisher: "Red Tower Books",
    isbn: "9781649374042",
    inStock: true,
  },
  {
    id: "6",
    title: "Tomorrow Will Be Better",
    author: "Sarah Smith",
    price: 10.99,
    rating: 4.1,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description: "A hopeful story about finding light in the darkest of times and the power of perseverance.",
    pages: 288,
    published: "June 15, 2022",
    publisher: "Sunshine Press",
    isbn: "9781234567890",
    inStock: true,
  },
  {
    id: "7",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 13.49,
    rating: 4.5,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.",
    pages: 400,
    published: "June 13, 2017",
    publisher: "Atria Books",
    isbn: "9781501139239",
    inStock: true,
  },
  {
    id: "8",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 11.49,
    rating: 4.7,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
    pages: 384,
    published: "August 14, 2018",
    publisher: "G.P. Putnam's Sons",
    isbn: "9780735219090",
    inStock: true,
  },
  {
    id: "9",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 16.99,
    rating: 4.9,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
    pages: 332,
    published: "June 26, 1997",
    publisher: "Bloomsbury",
    isbn: "9780747532699",
    inStock: true,
    series: "Harry Potter",
  },
  {
    id: "10",
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    price: 18.99,
    rating: 4.8,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.",
    pages: 432,
    published: "July 29, 1954",
    publisher: "Allen & Unwin",
    isbn: "9780618346257",
    inStock: true,
    series: "The Lord of the Rings",
  },
  {
    id: "11",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    price: 17.49,
    rating: 4.7,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King's Landing.",
    pages: 694,
    published: "August 1, 1996",
    publisher: "Bantam Spectra",
    isbn: "9780553103540",
    inStock: true,
    series: "A Song of Ice and Fire",
  },
  {
    id: "12",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 14.99,
    rating: 4.6,
    coverUrl: "/placeholder.svg?height=400&width=260",
    description:
      "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
    pages: 374,
    published: "September 14, 2008",
    publisher: "Scholastic Press",
    isbn: "9780439023481",
    inStock: true,
    series: "The Hunger Games",
  },
  // Add more books as needed
]

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id)
}

export function searchBooks(query: string, filters?: SearchFilters): Book[] {
  let results = [...books]

  // Apply text search
  if (query) {
    const searchTerm = query.toLowerCase()
    results = results.filter(
      (book) => book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm),
    )
  }

  // Apply price filters
  if (filters?.minPrice) {
    results = results.filter((book) => book.price >= (filters.minPrice || 0) / 1000)
  }

  if (filters?.maxPrice) {
    results = results.filter((book) => book.price <= (filters.maxPrice || Number.POSITIVE_INFINITY) / 1000)
  }

  return results
}

export function getNewReleases(): Book[] {
  return books.filter((book) => book.id >= "5" && book.id <= "8")
}

export function getBookSeries(): Book[] {
  return books.filter((book) => book.series)
}

export function getFeaturedBooks(): Book[] {
  return books.filter((book) => book.id >= "1" && book.id <= "4")
}
