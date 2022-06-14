import { test } from '@playwright/test'

import exampleTest from './exampleTest.test.js'

test('Home Page', async ({ page }) => {
  await exampleTest({ page })
})
