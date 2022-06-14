import shell from '../../../devtools/utils/node/shell.js'

export default async function testEverything() {
  try {
    await shell('npm run tests:eslint')
    await shell('npm run tests:ts-types')
    await shell('npm run tests:unit:ci')
    // await shell('npm run tests:e2e:run:all')
  } catch (error: any) {
    throw new Error(error)
  }
}
