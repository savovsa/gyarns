import { faker } from '@faker-js/faker'
import slug from 'slug'
import { ProductInsert } from '~/db/schema'

export function createRandomProducts(count: number): ProductInsert[] {
  return Array.from({ length: count }, createRandomProduct)
}

export function createRandomProduct(): ProductInsert {
  let material = randomYarnMaterial()
  let name = faker.commerce.productAdjective() + ' ' + material

  let quantity = faker.number.int({ min: 100, max: 100000 })
  return {
    name,
    slug: slug(name),
    image: getRandomYarnImage(),
    price: Number(faker.commerce.price({ min: 2, max: 150 })),
    currency: 'EUR',
    quantity: quantity,
    quantityUnitType: 'g',
    weightGrams: quantity,
    color_l: faker.number.float({ min: 0, max: 100 }),
    color_a: faker.number.float({ min: -128, max: 127 }),
    color_b: faker.number.float({ min: -128, max: 127 }),
    model: faker.company.buzzNoun(),
    content: material,
    numFibers: 2,
    metersPer100gPer1Fiber: 3,
    metersPer100gPerAllFibers: 1,
  }
}

let yarnMaterials = [
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

let images = [
  'https://images.unsplash.com/photo-1648005346768-246c3fac410b?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1641255588603-43ce25562746?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1670764732085-ebedbd8d7e7c?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1627395831267-26f625eab7b0?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1714680224711-688ecc30b392?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1694167575179-6eb66c919b99?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1670764732015-61a5cc490ce1?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1605588818931-cd8f98b65d78?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1655280371659-61bfcd9ec9b2?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1595301390417-c66647b47e9f?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1517490970599-197965fbcef4?w=700&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1635094421818-9f955ed91dc3?w=700&auto=format&fit=crop&q=60D',
]

let selectedImages: string[] = []

function getRandomYarnImage() {
  let imageIndex = Math.floor(Math.random() * images.length)
  let image = images.splice(imageIndex, 1)[0]
  selectedImages.push(image)

  return image
}
