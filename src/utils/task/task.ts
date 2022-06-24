import chalk from 'chalk'
import ora from 'ora'

type TaskProps = {
  fn: (props?: any) => Promise<any>
  message: string
  errorMessage: string
  successMessage: string
  onError?: (error: any) => Promise<any>
  noBail?: boolean
}

export default async function task(props: TaskProps) {
  const spinner = ora(props.message).start()

  console.log('')
  console.log(props.message)
  console.log('')

  try {
    const result = await props.fn()
    console.log('')
    console.log(props.successMessage)

    return result
  } catch (error) {
    if (props?.onError) {
      props.onError(error)
      return
    }

    console.log('')
    console.log(chalk.red(props.errorMessage))
    console.log('')
    console.error(chalk.red(JSON.stringify(error, null, 2)))

    if (props.noBail) return

    process.exit(1)
  } finally {
    console.log('')
  }
}
