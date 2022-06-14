import path from 'path'

import log from '../../utils/node/log.js'
import copyToClipboard from '../../utils/node/copyToClipboard.js'

import enquireSVGData from './handlers/enquireSVGData/enquireSVGData.js'
import create from './handlers/create/create.js'

export default async function createIcon() {
  const { iconName, svgString } = await enquireSVGData()
  const outputPath = path.join(
    process.cwd(),
    'src',
    'lib',
    'components',
    'icons',
    `${iconName}.tsx`,
  )

  const { spinner, chalk } = log(`Creating ${iconName}`, {
    loading: true,
  })

  try {
    await create({
      name: iconName,
      svgString,
      outputPath,
    })

    spinner.succeed(`Created ${chalk.cyan(outputPath)}`)
    copyToClipboard({ text: iconName })
  } catch (error: any) {
    spinner.stop()
    throw new Error(error)
  }
}
