import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the built site works at any path — both a GitHub Pages user
// site (daxpatel21.github.io/) and a project site (daxpatel21.github.io/repo/).
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
