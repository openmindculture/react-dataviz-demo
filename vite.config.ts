import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-dataviz-demo/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) {
              return 'vendor-recharts'; // Split lodash library
            }
            if (id.includes('react')) {
              return 'vendor-react'; // Split react-related libraries
            }
            return 'vendor'; // Split other node_modules dependencies
          }
        },
      },
    },
  },
})
