import { useLocation } from '@remix-run/react'

export function useIsAdminRoute() {
  const location = useLocation()
  const fragments = location.pathname.split('/')
  return fragments[1] === 'a'
}
