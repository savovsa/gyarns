import { Link } from '@remix-run/react'
import { Nav } from './Nav'
import { Shirt } from 'lucide-react'

export function Header() {
  return (
    <header className="mx-auto max-w-7xl px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center gap-1 mr-5" to="#">
        <Shirt className="h-6 w-6" />
        <span className="font-bold text-nowrap">G-Yarns</span>
      </Link>

      <Nav />
    </header>
  )
}
