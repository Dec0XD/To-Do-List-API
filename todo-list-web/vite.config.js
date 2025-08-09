import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': process.env.VITE_API_BASE ? undefined : {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
