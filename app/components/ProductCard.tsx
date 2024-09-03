import { Link } from '@remix-run/react'
import { AddToCartButton } from './AddToCartButton'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

export function ProductCard() {
  return (
    <Link
      to="#"
      className="flex flex-col gap-2 hover:no-underline hover:opacity-30 transition-opacity duration-200"
    >
      <img
        alt="Yarn product image"
        className="w-full h-60 object-cover rounded-lg"
        src="https://g-yarns.com/image/cache/catalog/Merino/50.50.1-600x500.jpg"
      />
      <div className="flex flex-col gap-0.5">
        <span>Merino wool blend</span>
        <span className="text-sm font-bold">$12.99</span>
      </div>
    </Link>
  )
}
