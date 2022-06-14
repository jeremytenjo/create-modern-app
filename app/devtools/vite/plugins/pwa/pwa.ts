import { VitePWA } from 'vite-plugin-pwa'

import { PayloadTypes } from '../../vite'

import getManifest from './manifest/manifest'
import getWorkbox from './workbox/workbox'
// import getIncludeAssets from './includeAssets/includeAssets'

// https://vite-plugin-pwa.netlify.app/guide/generate.html
export default function vitePWAPlugin({ appConfig }: PayloadTypes) {
  // https://vite-plugin-pwa.netlify.app/guide/generate.html#generate-service-worker
  return VitePWA({
    manifest: getManifest({ manifestJson: appConfig.manifestJson }),
    strategies: 'generateSW',
    workbox: getWorkbox(),
  })
}
