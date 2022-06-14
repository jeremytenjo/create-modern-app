import dotenv from 'dotenv'
import dotenvParseVariables from 'dotenv-parse-variables'

import doesFolderOrFileExist from '../doesFolderOrFileExist.js'

export default function parseEnvFile({ envFilePath }) {
  const doesEnvFileExists = doesFolderOrFileExist(envFilePath)
  if (!doesEnvFileExists) return {}

  const env = dotenv.config({ path: envFilePath })

  if (env.error) throw env.error

  const parsedEnvFile = dotenvParseVariables(env.parsed)

  return parsedEnvFile
}
