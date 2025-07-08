import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// svgr img for logo
import vitePluginSvg from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSvg(),
    tsconfigPaths()
  ],
  
})
