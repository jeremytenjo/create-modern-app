// https://github.com/Rich-Harris/degit
import degit from 'degit'

type CloneRepoTypes = {
  repoUrl: string
  outputPath: string
}

export default async function cloneRepo({ repoUrl, outputPath }: CloneRepoTypes) {
  const emitter = degit(repoUrl)

  await emitter.clone(outputPath)
}
