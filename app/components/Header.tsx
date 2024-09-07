import { Nav } from './Nav'
import { HomeButton } from './HomeButton'

export function Header() {
  return (
    <header className="mx-auto max-w-7xl px-4 lg:px-6 h-16 flex items-center border-b sticky">
      <HomeButton to="/" />
      <Nav />
    </header>
  )
}
