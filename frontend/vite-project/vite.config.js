import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Alias @ to the src directory
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    sourcemap: true, // Include source maps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate vendor chunks
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
