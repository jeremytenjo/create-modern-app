import path from 'path'

import chalk from 'chalk'

import cloneRepo from '../utils/cloneRepo/cloneRepo'
import getRepoUrl from '../utils/getRepoUrl/getRepoUrl'
import getUserArgs, { type GetUserArgsReturn } from './handlers/getUserArgs/getUserArgs'
import shell from '../utils/shell/shell'

export default async function createApp() {
  // get user options - name , app type = webapp, website, demo
  const userArgs: GetUserArgsReturn = await getUserArgs()
  const repoUrl = getRepoUrl({ type: userArgs.type })
  const outputPath = `${userArgs.name}`
  const fullOutPath = path.join(process.cwd(), outputPath)

  // clone repo depending on type
  console.log('')
  console.log(`Creating ${chalk.cyan(userArgs.name)}...`)
  console.log('')
  await cloneRepo({
    repoUrl,
    outputPath,
  })

  console.log(`${chalk.cyan(userArgs.name)} created! ${chalk.yellow(fullOutPath)}`)
  console.log('')

  try {
    await shell(`cd ${outputPath} && code . && code . README.md`)
    console.log('')

    console.log(chalk.cyan(`Installing ${chalk.cyan(userArgs.name)} dependencies...`))
    console.log('')

    // install dependencies
    await shell(`cd ${outputPath} && npm i`)
  } catch (error) {}
}
