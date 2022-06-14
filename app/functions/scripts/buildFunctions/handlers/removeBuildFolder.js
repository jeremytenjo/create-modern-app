import { join } from 'path'

import removeFolder from '../../../../devtools/utils/node/removeFolder.js'

export default async function removeBuildFolder({ rootPath }) {
  const buildDir = join(rootPath, 'build')
  await removeFolder(buildDir)
}
