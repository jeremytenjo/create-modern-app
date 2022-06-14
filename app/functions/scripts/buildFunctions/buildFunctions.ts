import { join } from 'path'

import { build } from 'esbuild'

import log from '../../../devtools/utils/node/log.js'

import getCommandLineArgs from './handlers/getCommandLineArgs.js'
import removeBuildFolder from './handlers/removeBuildFolder.js'
import getExternals from './handlers/getExternals.js'

export default async function buildFunctions() {
  const args = getCommandLineArgs()
  const rootPath = join(process.cwd(), 'functions')
  const entryPoint = join(rootPath, 'src', 'functions.js')
  const outfile = join(rootPath, 'build', 'index.js')

  const functionsJs = await import(entryPoint)
  const functionsList = Object.keys(functionsJs)

  if (!functionsList.length) {
    throw new Error(`No functions found in ${join(rootPath, 'src', 'functions.ts')}`)
  }

  const functionsListString = functionsList.join(', ')

  const { spinner, chalk } = log(`Building functions: ${functionsListString}`, {
    loading: true,
  })

  try {
    const { default: packageJson } = await import(join(rootPath, 'package.json'), {
      assert: { type: 'json' },
    })

    await removeBuildFolder({ rootPath })
    const external = getExternals({ packageJson })

    // https://esbuild.github.io/api/#simple-options
    await build({
      entryPoints: [entryPoint],
      outfile,
      bundle: true,
      minify: true,
      format: 'esm',
      target: 'es2017',
      watch: args.watch,
      external,
    })

    spinner.succeed(`Functions built successfully: ${chalk.cyan(functionsListString)}`)
  } catch (error: any) {
    spinner.stop()
    throw new Error(error)
  }
}
