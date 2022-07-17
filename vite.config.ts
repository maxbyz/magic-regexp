import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      'magic-regexp': fileURLToPath(new URL('./src/index.ts', import.meta.url).href),
    },
  },
  test: {
    coverage: {
      '100': true,
      include: ['src'],
      reporter: ['text', 'json', 'html'],
    },
  },
})
