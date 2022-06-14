import fs from 'fs-extra'

type Props = {
  paths: string[]
}

// https://github.com/jprichardson/node-fs-extra/blob/master/docs/ensureDir-sync.md
export default async function createFolder({ paths }: Props) {
  await Promise.all(
    paths.map(async (path) => {
      await fs.ensureDirSync(path)
    }),
  )
}
