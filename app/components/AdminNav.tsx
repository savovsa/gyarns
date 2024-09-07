import { cva, VariantProps } from 'class-variance-authority'
import { ShoppingCart, Package, Users, LineChart } from 'lucide-react'
import { AdminNavLink } from '~/components/AdminNavLink'

const navVariants = cva('grid gap-2 font-medium', {
  variants: {
    variant: {
      mobile: 'text-lg',
      desktop: 'items-start px-2 text-sm lg:px-4',
    },
  },
})

type NavProps = VariantProps<typeof navVariants>

export function AdminNav({ variant }: NavProps) {
  let iconClassName = variant === 'desktop' ? 'h-4 w-4' : 'h-6 w-6'

  return (
    <nav className={navVariants({ variant })}>
      <AdminNavLink to="/a/orders">
        <ShoppingCart className={iconClassName} />
        Orders
      </AdminNavLink>
      <AdminNavLink to="/a/products">
        <Package className={iconClassName} />
        Products
      </AdminNavLink>
      <AdminNavLink to="/a/customers">
        <Users className={iconClassName} />
        Customers
      </AdminNavLink>
      <AdminNavLink to="/a/analytics">
        <LineChart className={iconClassName} />
        Analytics
      </AdminNavLink>
    </nav>
  )
}
