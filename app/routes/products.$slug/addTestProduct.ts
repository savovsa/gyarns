import { faker } from '@faker-js/faker'
import slug from 'slug'
import { ProductInsert } from '~/db/schema'

export function createTestProducts(count: number): ProductInsert[] {
  return Array.from({ length: count }, (_, i) => ({
    slug: `test-product-${i + 1}`,
    name: `Test Product ${i + 1}`,
    price: 100 + i,
    currency: 'EUR',
    quantity: 10,
    quantityUnitType: 'kg',
    weightGrams: 1000,
    color_l: 21.49,
    color_a: 35.88,
    color_b: 22.69,
    manufacturerId: 1,
    model: `Test Model ${i + 1}`,
    content: `Test Content ${i + 1}`,
    numFibers: 2,
    metersPer100gPer1Fiber: 3,
    metersPer100gPerAllFibers: 1,
  }))
}

export function createTestProduct(): ProductInsert {
  let material = randomYarnMaterial()
  let name = faker.commerce.productAdjective() + ' ' + material

  let quantity = faker.number.int({ min: 100, max: 100000 })
  return {
    name,
    slug: slug(name),
    price: Number(faker.commerce.price({ min: 2, max: 150 })),
    currency: 'EUR',
    quantity: quantity,
    quantityUnitType: 'g',
    weightGrams: quantity,
    color_l: faker.number.float({ min: 0, max: 100 }),
    color_a: faker.number.float({ min: -128, max: 127 }),
    color_b: faker.number.float({ min: -128, max: 127 }),
    manufacturerId: 1,
    model: faker.company.buzzNoun(),
    content: material,
    numFibers: 2,
    metersPer100gPer1Fiber: 3,
    metersPer100gPerAllFibers: 1,
  }
}

const yarnMaterials = [
  'alpaca',
  'angora',
  'bargain',
  'camel',
  'cashmere',
  'cotton',
  'dundaga',
  'kauni',
  'linen',
  'lurex',
  'merino',
  'mohair',
  'pailettes',
  'silk',
  'tweed',
  'viscose',
  'yak',
]

function randomYarnMaterial(): string {
  return faker.helpers.arrayElement(yarnMaterials)
}
