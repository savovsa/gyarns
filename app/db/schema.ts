import { sql } from 'drizzle-orm'
import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
  real,
} from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
})

export type User = typeof users.$inferSelect

export type UserInsert = typeof users.$inferInsert

export const colors = sqliteTable('colors', {
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  name: text('name').notNull(),
  // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab
  l: real('l').notNull(),
  a: real('a').notNull(),
  b: real('b').notNull(),
})

export type Color = typeof colors.$inferSelect

export const manufacturers = sqliteTable('manufacturers', {
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  name: text('name').notNull(),
  country: text('country').notNull(),
})

export type Manufacurer = typeof manufacturers.$inferSelect

export const products = sqliteTable(
  'products',
  {
    slug: text('slug').primaryKey().notNull(),
    name: text('name').notNull(),
    price: real('price').notNull(),
    image: text('image').notNull().default(''),
    currency: text('currency').notNull(),
    createdAt: integer('createdAt')
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),

    quantity: real('quantity').notNull(),
    quantityUnitType: text('quantityUnitType').notNull(),
    weightGrams: real('weightGrams'),

    // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab
    color_l: real('color_l').notNull(),
    color_a: real('color_a').notNull(),
    color_b: real('color_b').notNull(),

    manufacturerId: integer('manufacturerId').references(
      () => manufacturers.id,
    ),
    model: text('model'),
    content: text('content'),
    numFibers: integer('fiberQuantity'),
    metersPer100gPer1Fiber: integer('metersPer100gPer1Fiber'),
    metersPer100gPerAllFibers: integer('metersPer100gPerAllFibers'),
  },
  (table) => ({
    slugIndex: uniqueIndex('slugIndex').on(table.slug),
    nameIndex: uniqueIndex('nameIndex').on(table.name),
  }),
)

export type Product = typeof products.$inferSelect

export type ProductInsert = typeof products.$inferInsert
