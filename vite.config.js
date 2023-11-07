import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // vite config
    define: {
      VITE_API_KEY: JSON.stringify(env.VITE_API_KEY),  // Make the env var available to your React client-side code
    },
  }
})