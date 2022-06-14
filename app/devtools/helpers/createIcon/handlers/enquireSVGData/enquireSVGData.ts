// https://github.com/enquirer/enquirer
import enquirer from 'enquirer'

type Return = {
  iconName: string
  svgString: string
}

export default async function enquireSVGData(): Promise<Return> {
  const { iconName, svgString }: Return = await enquirer.prompt([
    {
      type: 'input',
      name: 'iconName',
      message: 'Icon name',
    },
    {
      type: 'input',
      name: 'svgString',
      message: 'SVG tag',
      multiline: true,
    },
  ])

  return { iconName, svgString }
}
