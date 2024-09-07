import { Link, NavLinkProps } from '@remix-run/react'
import { Shirt } from 'lucide-react'

export function HomeButton(props: NavLinkProps) {
  return (
    <Link className="flex items-center justify-center gap-1 mr-5" to={props.to}>
      <Shirt className="h-6 w-6" />
      <span className="font-bold text-nowrap">G-Yarns</span>
    </Link>
  )
}
