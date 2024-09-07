import { NavLink } from '@remix-run/react'
import { RemixNavLinkProps } from '@remix-run/react/dist/components'
import { cn } from '~/lib/utils'

export function AdminNavLink(props: RemixNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive, isPending }) =>
        cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground',
          {
            'text-primary bg-muted': isActive,
            'bg-muted': isPending,
          },
        )
      }
    >
      {props.children}
    </NavLink>
  )
}
