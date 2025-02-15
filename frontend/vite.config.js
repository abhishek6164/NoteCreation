import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": {
        target: "https://deploy-mern-app-1-api.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
