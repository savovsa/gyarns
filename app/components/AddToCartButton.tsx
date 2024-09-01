import { ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'

export function AddToCartButton() {
  return (
    <Button variant="outline" className="flex gap-1 font-bold">
      <span className="">Add</span>
      <ShoppingCart strokeWidth={2} />
    </Button>
  )
}
