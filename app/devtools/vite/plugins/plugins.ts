import { PayloadTypes } from '../vite'

export default async function getVitePlugins(payload: PayloadTypes) {
  return [
    await (await import('./react/react')).default(),
    await (await import('./html/html')).default(payload),
    await (await import('./compression/compression')).default(payload),
    await (await import('./pwa/pwa')).default(payload),
    await (await import('./visualizer/visualizer')).default(payload),
  ]
}
