import { type MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
import { Shirt, ShoppingCart } from 'lucide-react'
import { AddToCartButton } from '~/components/AddToCartButton'
import { ProductCard } from '~/components/ProductCard'

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
        <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left mb-8">
              New arrivals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <ProductCard key={i} />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left mb-8">
              The Alpaca <span className="text-secondary">collection</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <ProductCard key={i} />
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
            Terms of service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
