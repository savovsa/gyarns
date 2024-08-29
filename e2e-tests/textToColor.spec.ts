import { test, expect } from '@playwright/test'

test('text to color', async ({ page }) => {
  await page.goto('/color')

  let input = page.getByRole('textbox')
  await input.fill('5caeed')

  let button = page.getByRole('button', { name: 'Find' })
  await button.click()

  let result = page.getByText('Blue Jeans')
  await expect(result).toBeVisible()
})
