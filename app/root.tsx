import { LinksFunction } from '@remix-run/cloudflare'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react'

import tailwind from '../app/tailwind.css?url'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useIsAdminRoute } from './lib/useIsAdminRoute'
import { AdminLayout } from './components/AdminLayout'
import { ErrorNotFound } from './components/ErrorNotFound'
import { ErrorGeneric } from './components/ErrorGeneric'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwind },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const isAdminRoute = useIsAdminRoute()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {!isAdminRoute && <Header />}
        {isAdminRoute ? <AdminLayout>{children}</AdminLayout> : children}
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <ErrorNotFound />
    }
  }

  return <ErrorGeneric />
}
