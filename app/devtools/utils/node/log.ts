import emoji from 'node-emoji'
// https://github.com/chalk/chalk
import chalk from 'chalk'
// https://github.com/sindresorhus/ora
import ora, { type Ora as OraInterface } from 'ora'

type Return = {
  spinner: OraInterface
  chalk: any
}

/**
 * [Emoji List](https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json)
 *
 * @example
 * log(`hello`)
 */
export default function log(
  rawMessage,
  {
    error,
    warning,
    color = 'white',
    space,
    success,
    step = '',
    startEmoji,
    endEmoji,
    raw,
    loading,
    trace = true,
  }: any = {},
): Return {
  let message = chalk[color](rawMessage)
  message = `${startEmoji ? emoji.get(startEmoji) : ''}  ${message} ${
    endEmoji ? emoji.get(endEmoji) : ''
  }`
  if (error) {
    console.log()
    console.log(chalk.red(rawMessage))
    console.log()
    if (trace) console.trace()
    console.log()
    process.exit(1)
  } else if (warning) {
    console.log()
    console.log(chalk.keyword('orange')(rawMessage))
    console.log()
    return { spinner: {} as any, chalk }
  } else if (loading) {
    console.log()
    const spinner = ora(rawMessage).start()
    spinner.text = rawMessage

    return { spinner, chalk }
  } else if (success) {
    if (step !== '') message = `${chalk.green(rawMessage)}`
    if (step !== '') step = `${chalk.magenta(step)}`

    message = `${chalk.keyword('lightgreen')('✔')}${message}`
  }

  if (space) console.log()
  if (raw) console.log(rawMessage)
  else console.log(`${chalk.cyan(`${step ? `[${step}]` : ''}`)} ${message}`)
  if (space) console.log()

  return { spinner: {} as any, chalk }
}

export { chalk }
