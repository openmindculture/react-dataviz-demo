import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// Use an environment variable for the base path.
// Locally, process.env.VITE_APP_BASE will be undefined, so it defaults to '/'.
// In CI, we will explicitly set VITE_APP_BASE.
const BASE_URL = process.env.VITE_APP_BASE || '/';

export default defineConfig({
    plugins: [react()],
    base: BASE_URL,
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
