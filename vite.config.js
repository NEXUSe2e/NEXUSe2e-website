import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nexuse2e-website/',
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
