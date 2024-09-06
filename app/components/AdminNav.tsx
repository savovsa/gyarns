import { ShoppingCart, Package, Users, LineChart } from 'lucide-react'
import { AdminNavLink } from '~/components/AdminNavLink'
import { Badge } from '~/components/ui/badge'

export function AdminNav() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <AdminNavLink to="/a/orders">
        <ShoppingCart className="h-4 w-4" />
        Orders
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </AdminNavLink>
      <AdminNavLink to="/a/products">
        <Package className="h-4 w-4" />
        Products
      </AdminNavLink>
      <AdminNavLink to="/a/customers">
        <Users className="h-4 w-4" />
        Customers
      </AdminNavLink>
      <AdminNavLink to="/a/analytics">
        <LineChart className="h-4 w-4" />
        Analytics
      </AdminNavLink>
    </nav>
  )
}
