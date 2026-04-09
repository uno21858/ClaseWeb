import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'samatha-diverting-overnegligently.ngrok-free.dev', // URL de ngorok
      'uno21things.dev' // OWN domain
    ]
  }
})