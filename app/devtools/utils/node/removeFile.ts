import fs from 'fs-extra'

type RemoveFilesProps = {
  paths: string[]
}

export default async function removeFile({ paths }: RemoveFilesProps) {
  await Promise.all(
    paths.map(async (path) => {
      await fs.remove(path)
    }),
  )
}
