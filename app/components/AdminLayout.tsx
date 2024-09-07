import { Link } from '@remix-run/react'
import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from 'lucide-react'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { AdminNav } from './AdminNav'
import { AccountMenu } from './AccountMenu'
import { HomeButton } from './HomeButton'

export const description =
  'A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.'

type Props = {
  children: React.ReactNode
}

export function AdminLayout(props: Props) {
  return (
    <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r w-full bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              to="/a/orders"
              className="flex items-center gap-2 font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="">G-Yarns</span>
            </Link>
            <div className="ml-auto h-8 w-8">
              <AccountMenu align="start" />
            </div>
          </div>
          <div className="flex-1">
            <AdminNav variant="desktop" />
          </div>
          <div className="mt-auto p-4">{/* Footer */}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="self-start p-3">
                <HomeButton to="/a/orders" />
              </div>
              <AdminNav variant="mobile" />
              <div className="mt-auto">{/* Footer */}</div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search commands"
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>

          <div className="md:hidden">
            <AccountMenu align="end" />
          </div>
        </header>

        {props.children}
      </div>
    </div>
  )
}
