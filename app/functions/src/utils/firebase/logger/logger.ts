import { logger as firebaseFunctionLogger } from 'firebase-functions'

type Props = {
  message: string
  data?: object
  level?: 'info' | 'warn' | 'error'
}

export default function logger({ message, level = 'info', data = {} }: Props) {
  firebaseFunctionLogger[level](message, data)
}
