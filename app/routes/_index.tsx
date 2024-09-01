import { type MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
import { Shirt, ShoppingCart } from 'lucide-react'
import { AddToCartButton } from '~/components/AddToCartButton'

import { Button } from '~/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '~/components/ui/card'

export const meta: MetaFunction = () => {
  return [{ title: 'G-Yarns' }]
}

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" to="#">
          <Shirt className="h-6 w-6" />
          <span className="sr-only">G-Yarns</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            Collections
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="/signup"
          >
            Sign up
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left mb-8">
              New arrivals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Merino wool blend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="Yarn product image"
                      className="w-full h-60 object-cover rounded-lg"
                      height="240"
                      src="https://g-yarns.com/image/cache/catalog/Merino/50.50.1-600x500.jpg"
                      width="320"
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
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left mb-8">
              The Alpaca{' '}
              <span className="text-secondary">collection example</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>Filitaly Lab alpaca</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt="product image"
                      className="w-full h-80 object-cover mb-4 rounded-lg"
                      height="320"
                      src="https://filitaly-lab.it/wp-content/uploads/2022/02/SS23_macaron-1024x577.jpg"
                      width="320"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Indulge in the softness of our alpaca yarn. Perfect for
                      luxurious scarves and sweaters.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-auto">
                    <span className="text-lg font-bold">$24.99</span>
                    <AddToCartButton />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Copyright {new Date().getFullYear()} G-Yarns
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
