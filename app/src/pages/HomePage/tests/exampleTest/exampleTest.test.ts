// https://playwright.dev/docs/selectors
import { expect } from '@playwright/test'

export default async function exampleTest({ page }) {
  await page.goto('/')

  const header = await page.innerText('h1')
  expect(header).toBe('Home Page')
}
