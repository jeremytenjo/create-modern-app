import chalk from 'chalk'

type TaskProps = {
  fn: (props?: any) => Promise<any>
  title: string
  errorMessage: string
  successMessage: string
  onError?: (error: any) => any
  noBail?: boolean
}

export default async function task(props: TaskProps) {
  console.log(`${chalk.yellow('⚡')}${props.title}`)
  console.log('')

  try {
    const result = await props.fn()

    console.log('')
    console.log(`${chalk.green('✔')} ${props.successMessage}`)

    return result
  } catch (error) {
    if (props?.onError) {
      await props.onError(error)
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
