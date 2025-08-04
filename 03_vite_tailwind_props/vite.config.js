import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// imported tailwindcss 
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react() ,
    tailwindcss()
  ],
})
