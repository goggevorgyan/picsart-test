import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  build: {
    minify: true,
  },
  server: {
    port: 3030
  },
  preview: {
    port: 80,
  }
})
