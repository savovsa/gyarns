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
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        backgroundColor: '#dddedc',
        border: `2px solid ${color}`,
        padding: 5,
        paddingLeft: 5,
        // paddingRight: 10,
        borderRadius: 10,
        width: 'fit-content',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          width: 30,
          height: 30,
          borderRadius: 20,
          marginRight: 5,
        }}
      />

      <span style={{ color: 'black' }}>{name}</span>
      <span style={{ opacity: 0.4 }}>{color}</span>
    </Link>
  )
}
