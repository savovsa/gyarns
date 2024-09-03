import { type MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'
import { Shirt } from 'lucide-react'
import { Nav } from '~/components/Nav'
import { ProductCard } from '~/components/ProductCard'
import { Section } from '~/components/Section'

export const meta: MetaFunction = () => {
  return [{ title: 'G-Yarns' }]
}

export default function Index() {
  return (
    <main>
      <Section title="New arrivals" variant="secondary">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} />
        ))}
      </Section>

      <Section title="The Alpaca" subtitle="collection">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} />
        ))}
      </Section>
      <Section title="Autumn" subtitle="sale" variant="secondary">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} />
        ))}
      </Section>
    </main>
  )
}
