// https://react-svgr.com/docs/options/#expand-props
import { transform } from '@svgr/core'

export default async function convertSVGToReactSVG({ svgString }) {
  let jsCode = await transform(svgString, {
    jsxRuntime: 'automatic',
    dimensions: false,
    expandProps: false,
    template: (variables, { tpl }) => {
      return tpl`${variables.jsx}`
    },
  })

  jsCode = jsCode.replace(';', '')

  return jsCode
}
