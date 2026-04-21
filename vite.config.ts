import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Plaatst het manifest in dist/client zodat prerender-script assets kan matchen
    manifest: true,
  },
})
