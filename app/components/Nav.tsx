import { NavLink } from '@remix-run/react'
import { Globe, Languages, Search, ShoppingBasket, User } from 'lucide-react'

export function Nav() {
  return (
    <div className="flex gap-4 w-full">
      <nav className="flex gap-3 sm:gap-3">
        <NavLink to="#">Colors</NavLink>
        <NavLink to="#">Collections</NavLink>
        <NavLink to="#">Materials</NavLink>
      </nav>

      <div className="ml-auto flex gap-4 sm:gap-6">
        <Search />
        <User />
        <ShoppingBasket />
        <Languages />
      </div>
    </div>
  )
}
