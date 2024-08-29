import { AppLoadContext } from '@remix-run/cloudflare'
import { type PlatformProxy } from 'wrangler'
import { DatabaseClient, createDbClient } from './app/db/dbClient.server'
import { Services, createServices } from './app/db/createServices.server'

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>

type RawArg = {
  request: Request
  context: {
    cloudflare: Cloudflare
  }
}

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    cloudflare: Cloudflare
    db: DatabaseClient
    ai: Env['AI']
    service: Services
  }
}

export async function getLoadContext({
  context,
}: RawArg): Promise<AppLoadContext> {
  const db = createDbClient(context.cloudflare.env.DB)
  const service = createServices({ db })

  return { ...context, db, service, ai: context.cloudflare.env.AI }
}
