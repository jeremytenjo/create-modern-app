import getIpAddress from './devtools/utils/node/getIpAddress.js'
import pkg from './package.json' assert { type: 'json' }
import themeTokens from './src/theme/tokens/tokens.js'

export default async function appConfig(): Promise<AppConfigTypes> {
  return {
    domain: {
      main: 'https://starter-webapp.vercel.app/',
    },
    manifestJson: {
      name: 'Webapp Starter',
      short_name: 'Webapp Starter',
      description: pkg.description,
      start_url: '/',
      orientation: 'any',
      display: 'standalone',
      theme_color: themeTokens.colors.themeColor,
      background_color: themeTokens.colors.backgroundColor,
      screenshots: [
        {
          src: 'images/manifest/screenshot-create.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-home.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-sync.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-edit.png',
          sizes: '360x640',
          type: 'image/png',
        },
      ],
    },
    server: {
      local: {
        port: 3001,
        IPAddress: getIpAddress(),
      },
    },
    theme: {
      tokens: themeTokens,
    },
    devtools: {
      storybook: {
        port: 6006,
      },
    },
  }
}

export type AppConfigTypes = {
  manifestJson: {
    name: string
    short_name: string
    description: string
    orientation: string
    display: string
    theme_color: string
    background_color: string
    start_url: string
    gcm_sender_id?: string
    screenshots?: {
      src: string
      sizes: string
      type: string
    }[]
    shortcuts?: {
      name?: string
      short_name?: string
      description?: string
      url?: string
      icons?: {
        src: string
        sizes: string
      }[]
    }[]
  }
  analytics?: {
    google?: {
      // https://www.optimizesmart.com/understanding-measurement-id-in-ga4-google-analytics-4/#1-how-to-find-google-analytics-4-measurement-id-
      measurementId: string
    }
  }
  server: {
    local: {
      port: number
      IPAddress: string | undefined
    }
  }
  theme: {
    tokens: any
  }
  domain: {
    main: string
  }
  devtools: {
    storybook: {
      port: number
    }
  }
}
