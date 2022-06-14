import qrCode from 'qrcode-terminal'

import getIpAddress from '../../../devtools/utils/node/getIpAddress.js'
import shell from '../../../devtools/utils/node/shell.js'
import getAppConfig from '../../../app.config.js'

// in scripts instad of devtoosl/storyboo/scipts because of the pacakge commonjs
export default async function startStorybook() {
  const appConfig = await getAppConfig()
  const storybookPort = appConfig.devtools.storybook.port
  const ipAddress = getIpAddress()
  const networkUrl = `http://${ipAddress}:${storybookPort}`

  qrCode.generate(networkUrl, {
    small: true,
  })

  shell(`start-storybook -p ${storybookPort} -c ./devtools/storybook --no-open`)
}
