import createFile from '../../../../utils/node/createFile.js'
import convertSVGToReactSVG from '../../../../utils/svg/convertSVGToReactSVG.js'

type Props = {
  name: string
  svgString: string
  outputPath: string
}

export default async function create({ name, svgString, outputPath }: Props) {
  const svgStringWithoutWidthHeight = await convertSVGToReactSVG({
    svgString,
  })
  const svg = `import React from 'react'
import { createSvgIcon } from '@mui/material'

export default createSvgIcon(
  ${svgStringWithoutWidthHeight},
  '${name}',
)`

  await createFile({
    filePath: outputPath,
    fileContent: svg,
    noTimestamp: true,
  })
}
