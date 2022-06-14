import fs from 'fs'

export default function removeFolder(path) {
  return new Promise((resolve) => {
    fs.rm(path, { recursive: true }, () => resolve(true))
  })
}
