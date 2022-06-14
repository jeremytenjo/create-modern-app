import path from 'path'

import watchFolder from '../../../../utils/node/watchFolder.js'
import shell from '../../../../utils/node/shell.js'
import getCommandLineArgs from '../../../../utils/node/getCommandLineArgs.js'

export default async function runPlayWright() {
  const { watch } = getCommandLineArgs([
    {
      name: 'watch',
      type: Boolean,
    },
  ])

  await runPlaywrightTests()

  if (watch) {
    const folderToWatch = path.join(process.cwd(), 'src')

    watchFolder({
      folderToWatch,
      onChange: runPlaywrightTests,
    })
  }
}

const runPlaywrightTests = async () => {
  shell(
    'npx playwright test --headed --config=devtools/testing/playwright/playwright.config.ts',
  )
}
