import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@main': resolve('src/main/'),
        '@preload': resolve('src/preload/'),
        '@components': resolve('src/renderer/src/components/'),
        '@img': resolve('src/renderer/src/assets/imgs/'),
        '@store': resolve('src/renderer/src/store/')
      }
    },
    plugins: [react()]
  }
})
