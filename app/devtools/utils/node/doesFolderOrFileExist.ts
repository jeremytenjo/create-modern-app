import fs from 'fs'

/**
 * @example
 * doesFolderOrFileExist(dir)
 */
export default function doesFolderOrFileExist(path) {
  return fs.existsSync(path)
}
