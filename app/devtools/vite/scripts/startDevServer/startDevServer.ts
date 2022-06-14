import shell from '../../../utils/node/shell.js'
import getAppConfig from '../../../../app.config.js'

export default async function startDevServer() {
  const appConfig = await getAppConfig()

  shell(
    `vite --config ./devtools/vite/vite.ts --host --port ${appConfig.server.local.port}`,
  )
}
