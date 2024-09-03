import { type MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
import { Shirt } from 'lucide-react'
import { ProductCard } from '~/components/ProductCard'
import { Section } from '~/components/Section'

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
        <Section title="New arrivals" variant="secondary">
          {[1, 2, 3, 4].map((i) => (
            <ProductCard key={i} />
          ))}
        </Section>

        <Section
          title={
            <>
              The Alpaca <span className="text-secondary">collection</span>
            </>
          }
        >
          {[1, 2, 3, 4].map((i) => (
            <ProductCard key={i} />
          ))}
        </Section>
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
