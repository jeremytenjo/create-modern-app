// https://vitest.dev/api/
import { test } from 'vitest'

import shell from '../../src/utils/shell/shell.js'

test('Create webapp', async () => {
  await shell('npm run test:create-webapp-dev')
}, 40000)

test('Create website', async () => {
  await shell('npm run test:create-website-dev')
}, 40000)

test('Create demo', async () => {
  await shell('npm run test:create-demo-dev')
}, 40000)
