/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitest.dev/guide/cli.html#options
export default defineConfig({
  plugins: [react()] as any,
  test: {
    include: ['**/unit.tests/*.test.ts/'],
  },
})
