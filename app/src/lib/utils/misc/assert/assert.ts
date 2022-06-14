type AssertProps = {
  condition: boolean
  message: string
}

export default function assert({ condition, message }: AssertProps) {
  if (condition) {
    throw message
  }
}
