import { defineConfig } from 'vite'

import getAppConfig, { AppConfigTypes } from '../../app.config'

export type PayloadTypes = {
  appConfig: AppConfigTypes
  isProdMode: boolean
  isDevMode: boolean
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const appConfig = await getAppConfig()

  const payload: PayloadTypes = {
    appConfig,
    isProdMode: mode === 'production',
    isDevMode: mode === 'development',
  }

  return {
    plugins: await (await import('./plugins/plugins')).default(payload),
    build: (await import('./build/build')).default(payload),
  }
})
