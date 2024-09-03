import { AddToCartButton } from './AddToCartButton'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

export function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Merino wool blend</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          alt="Yarn product image"
          className="w-full h-60 object-cover rounded-lg"
          src="https://g-yarns.com/image/cache/catalog/Merino/50.50.1-600x500.jpg"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          100g / 3.5oz
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-lg font-bold">$12.99</span>
        <AddToCartButton />
      </CardFooter>
    </Card>
  )
}
