import shell from '../../../utils/node/shell.js'

export default async function buildApp() {
  shell('tsc && vite build --config ./devtools/vite/vite.ts')
}
