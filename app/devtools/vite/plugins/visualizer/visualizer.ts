import path from 'path'

import { visualizer } from 'rollup-plugin-visualizer'

import { PayloadTypes } from '../../vite'

// https://github.com/anncwb/vite-plugin-compression
export default function viteVisualizerPlugin({ isProdMode }: PayloadTypes) {
  return isProdMode
    ? visualizer({
        filename: path.join(
          process.cwd(),
          'devtools/vite/plugins/visualizer/bundle-info.html',
        ),
      })
    : () => null
}
