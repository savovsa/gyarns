import { describe, it, expect } from 'vitest'
import { isAdminRoute } from './useIsAdminRoute'

describe('isAdminRoute', () => {
  it('true for /a', () => {
    expect(isAdminRoute('/a')).toBe(true)
  })

  it('true for /a/orders', () => {
    expect(isAdminRoute('/a/orders')).toBe(true)
  })

  it('false for /product', () => {
    expect(isAdminRoute('/product')).toBe(false)
  })

  it('false for /product/a', () => {
    expect(isAdminRoute('/product/a')).toBe(false)
  })
})
