import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    coverage: {
      include: ['src/use-cases/**/*.{ts,js}'],
      exclude: ['**/node_modules/**', '**/build/**'],
    },
  },
})
