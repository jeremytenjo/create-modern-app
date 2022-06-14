// https://github.com/enquirer/enquirer
import enquirer from 'enquirer'

import getCommandLineArgs from './getCommandLineArgs'

const { Select } = enquirer as any

export type GetUserArgsReturn = {
  name: string
  type: 'webapp' | 'website' | 'demo'
}

const types: GetUserArgsReturn['type'][] = ['webapp', 'website', 'demo']

export default async function getUserArgs(): Promise<GetUserArgsReturn> {
  const args = getCommandLineArgs()

  let res: any = {
    name: args.name,
    type: args.type,
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
      initial: 'webapp',
    })

    const type = (await prompt.run()) || res.type
    res = { ...res, type }
  }

  return res
}
