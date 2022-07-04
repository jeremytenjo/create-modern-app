import path from 'path'
// https://vitest.dev/api/
import { describe, it } from 'vitest'

import shell from '../../src/utils/shell/shell.js'
import removeFolder from '../../src/utils/removeFolder/removeFolder'

await removeFolder(path.join(process.cwd(), 'testResult'))

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
