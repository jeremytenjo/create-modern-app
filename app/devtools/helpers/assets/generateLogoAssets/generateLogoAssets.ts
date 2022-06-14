import path from 'path'

import createFolder from '../../../utils/node/createFolder.js'
import convertImage from '../../../utils/images/convertImage.js'
import type { Props as ConvertImageProps } from '../../../utils/images/convertImage.js'

/**
 * Updates logo assests based on public/images/logo/logo.svg
 */
export default async function generateLogoAssets() {
  const rootPath = path.join(process.cwd(), 'public', 'images', 'logo')
  const logoPath = path.join(rootPath, 'logo.svg')
  const outputFolderPath = path.join(rootPath, 'assets')
  const applePath = path.join(outputFolderPath, 'apple')
  const sizesPath = path.join(outputFolderPath, 'sizes')
  const pngLogoPath = path.join(outputFolderPath, 'logo.png')

  await createFolder({ paths: [outputFolderPath, applePath, sizesPath] })

  const getSizeIconName = (name: string) => path.join(sizesPath, name)
  const getAppleIconName = (name: string) => path.join(applePath, name)

  const iconList = [
    {
      outputPath: pngLogoPath,
      filePath: logoPath,
      format: 'png',
      width: 512,
      height: 512,
    },
    {
      outputPath: getAppleIconName('apple-touch-icon.png'),
      filePath: logoPath,
      format: 'png',
      width: 152,
      height: 152,
    },
    {
      outputPath: getSizeIconName('152x152.png'),
      filePath: logoPath,
      format: 'png',
      width: 152,
      height: 152,
    },
    {
      outputPath: getSizeIconName('192x192.png'),
      filePath: logoPath,
      format: 'png',
      width: 192,
      height: 192,
    },
    {
      outputPath: getSizeIconName('256x256.png'),
      filePath: logoPath,
      format: 'png',
      width: 256,
      height: 256,
    },
    {
      outputPath: getSizeIconName('384x384.png'),
      filePath: logoPath,
      format: 'png',
      width: 384,
      height: 384,
    },
    {
      outputPath: getSizeIconName('512x512.png'),
      filePath: logoPath,
      format: 'png',
      width: 512,
      height: 512,
    },
  ] as ConvertImageProps[]

  await Promise.all(
    iconList.map(async (icon: ConvertImageProps) => {
      await convertImage(icon)
    }),
  )
}
