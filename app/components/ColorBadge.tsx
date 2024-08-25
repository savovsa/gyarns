import { Link } from '@remix-run/react'

export type ColorBadgeProps = {
  color: string
  name: string
}

export function ColorBadge({ color, name }: ColorBadgeProps) {
  return (
    <Link
      to="/atlas"
      style={{
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dddedc',
        border: `2px solid ${color}`,
        padding: 5,
        paddingLeft: 10,
        // paddingRight: 10,
        borderRadius: 10,
        width: 'fit-content',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          width: 20,
          height: 20,
          borderRadius: 10,
          marginRight: 5,
        }}
      />

      <span style={{ color }}>{name}</span>
      <span style={{ opacity: 0.4 }}>{color}</span>
    </Link>
  )
}
