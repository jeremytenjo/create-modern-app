import commandLineArgs from 'command-line-args'

type ArgOptions = {
  name: string
  type: any
}

/**
 * [Docs](https://github.com/75lb/command-line-args#readme)
 *
 * @example
 * const scriptArgs = getCommandLineArgs([{ name: 'hello', type: String }])
 */
export default function getCommandLineArgs(argOptions: ArgOptions[]) {
  const options = commandLineArgs(argOptions)

  return options
}
