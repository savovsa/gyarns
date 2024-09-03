import { Link } from '@remix-run/react'

type Props = {
  to: string
  children: React.ReactNode
}

export function NavLink(props: Props) {
  return (
    <Link
      className="text-sm font-medium hover:underline underline-offset-4"
      to={props.to}
    >
      {props.children}
    </Link>
  )
}
