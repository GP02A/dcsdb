import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config';
// import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  //use base to setup pwa at subdirectory
  // base: '/pwa/dcsdb',
  plugins: [
    react(),
    legacy(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
