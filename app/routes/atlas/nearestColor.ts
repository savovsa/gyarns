import nearestColor from 'nearest-color'
import colorNameList from 'color-name-list'

// nearestColor uses {[name]: hex} as input
let colors = colorNameList.reduce(
  (o, { name, hex }) => Object.assign(o, { [name]: hex }),
  {},
)

export let getNearest = nearestColor.from(colors)

export type ColorMatch = ReturnType<typeof getNearest>
