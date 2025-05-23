import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-brand-light">
      <div className="relative w-24 h-24 mb-4">
        <Image src="/images/booksly-logo.jpg" alt="Booksly" fill className="object-contain" />
      </div>
      <div className="text-brand-DEFAULT font-bold text-xl mb-4">Booksly</div>
      <div className="w-16 h-1.5 bg-brand-pale overflow-hidden rounded-full">
        <div className="h-full bg-brand-DEFAULT animate-[pulse_1.5s_ease-in-out_infinite] rounded-full"></div>
      </div>
    </div>
  )
}
