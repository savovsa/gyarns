import { json, LoaderFunctionArgs } from '@remix-run/cloudflare'
import { createRandomProducts } from '../lib/createRandomProduct'
import { products } from '~/db/schema'

export const loader = async ({ context }: LoaderFunctionArgs) => {
  let data = createRandomProducts(20)

  for (const product of data) {
    // Workaround because Cloudflare limits how many bound parameters we can have
    // https://github.com/drizzle-team/drizzle-orm/issues/2479
    await context.db.insert(products).values(product)
  }

  return json(data)
}
