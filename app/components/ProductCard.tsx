import { Link } from '@remix-run/react'

type ProductCardProps = {
  title: string
  image: string
  price: number
}

export function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <Link
      to="#"
      className="flex flex-col gap-2 hover:no-underline hover:opacity-30 transition-opacity duration-200"
    >
      <img
        alt="Yarn product image"
        className="w-full h-60 object-cover rounded-lg"
        src={image}
      />
      <div className="flex flex-col gap-0.5">
        <span>{title}</span>
        <span className="text-sm font-bold">${price}</span>
      </div>
    </Link>
  )
}
