import shell from '../../../utils/node/shell.js'

export default async function runBuild() {
  shell('vite preview --config ./devtools/vite/vite.ts --port 8080 --host')
}
