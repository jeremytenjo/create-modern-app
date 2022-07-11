import path from 'path'

import chalk from 'chalk'
import Listr from 'listr'

import cloneRepo from '../utils/cloneRepo/cloneRepo'
import getRepoUrl from '../utils/getRepoUrl/getRepoUrl'
import getUserArgs, { type GetUserArgsReturn } from './handlers/getUserArgs/getUserArgs'
import shell from '../utils/shell/shell'
import renderTitle from '../utils/renderTitle/renderTitle'

export default async function createApp() {
  renderTitle({ title: 'CREATE MODERN APP' })

  // get user options - name , app type = webapp, website, demo
  const userArgs: GetUserArgsReturn = await getUserArgs()
  const repoUrl = getRepoUrl({ type: userArgs.type })
  const outputPath = `${userArgs.name}`
  const fullOutPath = path.join(process.cwd(), outputPath)

  const tasks = new Listr([
    {
      title: `Creating ${chalk.cyan(userArgs.name)}`,
      task: () =>
        cloneRepo({
          repoUrl,
          outputPath,
          force: userArgs.force,
        }),
    },
    {
      title: 'Opening VS Code',
      task: () => shell(`cd ${outputPath} && code . && code . README.md`),
    },
    {
      title: `Install ${chalk.cyan(userArgs.name)} dependencies`,
      task: () => shell(`cd ${outputPath} && npm i`),
    },
  ])

  try {
    await tasks.run()
    console.log('')
    console.log(`🚀 ${chalk.cyan(userArgs.name)} created! ${chalk.yellow(fullOutPath)}`)
    console.log('')
  } catch (error) {
    console.log('')
    console.error(error)
    console.log('')
  }
}
