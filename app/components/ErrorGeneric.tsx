import { Link } from '@remix-run/react'
import { Home } from 'lucide-react'
import { Button } from './ui/button'

export function ErrorGeneric() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Something went wrong. <br /> Please try again later or{' '}
        <Link to="/contact" className="underline text-primary">
          contact us.
        </Link>
      </p>
      <Button asChild>
        <Link to="/" className="flex items-center">
          <Home className="mr-2 h-4 w-4" />
          Go Home
        </Link>
      </Button>
    </div>
  )
}
