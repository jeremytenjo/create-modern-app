// https://vitest.dev/api/
import { describe, it } from 'vitest'

import shell from '../../src/utils/shell/shell.js'

describe('Create app', () => {
  it.concurrent(
    'Create webapp',
    async () => {
      await shell('npm run test:create-webapp-dev')
    },
    40000,
  )

  it.concurrent(
    'Create website',
    async () => {
      await shell('npm run test:create-website-dev')
    },
    40000,
  )

  it.concurrent(
    'Create demo',
    async () => {
      await shell('npm run test:create-demo-dev')
    },
    40000,
  )
})
