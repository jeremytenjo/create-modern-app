// https://github.com/sindresorhus/clipboardy
import clipboard from 'clipboardy'

import log, { chalk } from './log.js'

type Props = {
  text: string
}

export default function copyToClipboard({ text }: Props) {
  clipboard.writeSync(text)
  log(`${chalk.cyan(text)} copied to clipboard`)
}
