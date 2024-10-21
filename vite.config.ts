import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts({rollupTypes: true})],
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es']
    },
    cssCodeSplit: true
  },
})
