// https://github.com/Rich-Harris/degit
import degit from 'degit'

type CloneRepoTypes = {
  repoUrl: string
  outputPath: string
  force?: boolean
}

export default async function cloneRepo({ repoUrl, outputPath, force }: CloneRepoTypes) {
  const emitter = degit(repoUrl, {
    force,
  })

  await emitter.clone(outputPath)
}
