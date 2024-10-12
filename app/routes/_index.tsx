import {
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { ProductCard } from '~/components/ProductCard'
import { Section } from '~/components/Section'
import { products } from '~/db/schema'

export const meta: MetaFunction = () => {
  return [{ title: 'G-Yarns' }]
}

export async function loader({ context }: LoaderFunctionArgs) {
  const data = await context.db.select().from(products).limit(12)
  return json(data)
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const products1 = data.slice(0, 4)
  const products2 = data.slice(4, 8)
  const products3 = data.slice(8)

  return (
    <main>
      <Section title="New arrivals" variant="secondary">
        {products1.map((product, i) => (
          <ProductCard
            key={i}
            title={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </Section>

      <Section title="The Alpaca" subtitle="collection">
        {products2.map((product, i) => (
          <ProductCard
            key={i}
            title={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </Section>
      <Section title="Autumn" subtitle="sale" variant="secondary">
        {products3.map((product, i) => (
          <ProductCard
            key={i}
            title={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </Section>
    </main>
  )
}
