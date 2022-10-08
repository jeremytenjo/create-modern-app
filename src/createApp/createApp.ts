import path from 'path'

import chalk from 'chalk'

import cloneRepo from '../utils/cloneRepo/cloneRepo'
import getRepoUrl from '../utils/getRepoUrl/getRepoUrl'
import getUserArgs, { type GetUserArgsReturn } from './handlers/getUserArgs/getUserArgs'
import shell from '../utils/shell/shell'
import task from '../utils/task/task'
import renderTitle from '../utils/renderTitle/renderTitle'

export default async function createApp() {
  renderTitle({ title: 'CREATE MODERN APP' })

  // get user options - name , app type = webapp, website, demo
  const userArgs: GetUserArgsReturn = await getUserArgs()
  const repoUrl = getRepoUrl({ type: userArgs.type })
  const outputPath = `${userArgs.name}`
  const fullOutPath = path.join(process.cwd(), outputPath)

  await task({
    fn: () =>
      cloneRepo({
        repoUrl,
        outputPath,
        force: userArgs.force,
      }),
    title: `Creating ${chalk.cyan(userArgs.name)}`,
    successMessage: `${chalk.cyan(userArgs.name)} created!`,
    errorMessage: `Failed to create ${chalk.cyan(userArgs.name)}`,
  })

  await task({
    fn: () =>
      shell(`cd ${outputPath} && code . && code . ./src/pagesContent/Home/Home.tsx`),
    title: 'Opening VS Code',
    successMessage: 'Opened VS Code',
    errorMessage: 'Failed to open VS Code',
    onError: async () => {
      try {
        await shell(
          `cd ${outputPath} && code-insiders . && code-insiders . ./src/pagesContent/Home/Home.tsx`,
        )
      } catch (error) {
        console.log('')
      }
    },
  })

  await task({
    fn: () => shell(`cd ${outputPath} && npm i`),
    title: `Installing ${chalk.cyan(userArgs.name)} dependencies`,
    successMessage: 'Dependencies installed',
    errorMessage: 'Failed to install dependencies',
  })

  console.log('')
  console.log(
    `🚀 ${chalk.cyan(userArgs.name)} created. Run ${chalk.yellow(
      `npm run dev`,
    )} and start building!`,
  )
  console.log('')
  console.log(`${chalk.yellow(fullOutPath)}`)
  console.log('')
}
