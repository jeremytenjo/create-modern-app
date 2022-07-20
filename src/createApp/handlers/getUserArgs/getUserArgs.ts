// https://github.com/enquirer/enquirer
import enquirer from 'enquirer'

import getCommandLineArgs from './getCommandLineArgs'

const { Select } = enquirer as any

export type GetUserArgsReturn = {
  name: string
  type: 'webapp' | 'website' | 'demo'
  force: boolean
}

const types: GetUserArgsReturn['type'][] = ['website', 'webapp', 'demo']

export default async function getUserArgs(): Promise<GetUserArgsReturn> {
  const args = getCommandLineArgs()

  let res: GetUserArgsReturn = {
    name: args.name,
    type: args.type,
    force: args.force,
  }

  if (!res.name) {
    const userInput = await enquirer.prompt({
      type: 'input',
      name: 'name',
      message: 'Project name',
      initial: 'app',
    })

    res = { ...res, ...userInput }
  }

  if (!res.type) {
    const prompt = new Select({
      name: 'type',
      message: 'Select app type',
      choices: types,
      initial: 'website',
    })

    const type = (await prompt.run()) || res.type
    res = { ...res, type }
  }

  console.log('')

  return res
}
