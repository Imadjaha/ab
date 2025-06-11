import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // or use '/your-repo-name/' if you're not using a custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
       input: {
        main: 'index.html',
        verification: 'googlef99bd8e23d7d0c7f.html'
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  }
})
