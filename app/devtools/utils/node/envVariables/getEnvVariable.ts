import path from 'path'

import parseEnvFile from './parseEnvFile.js'

type GetEnvVariableProps = {
  name: string
}

export default function getEnvVariable({ name }: GetEnvVariableProps) {
  const envFilePath = path.join(process.cwd(), '.env.local')
  const envVars = parseEnvFile({ envFilePath })

  return envVars[name] || import.meta.env[name]
}
