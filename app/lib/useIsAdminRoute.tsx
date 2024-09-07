import { useLocation } from '@remix-run/react'

export function useIsAdminRoute() {
  const location = useLocation()
  return isAdminRoute(location.pathname)
}

export function isAdminRoute(pathname: string) {
  const fragments = pathname.split('/')
  return fragments[1] === 'a'
}
