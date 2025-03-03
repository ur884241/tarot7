// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/index.html'), // Explicitly specify the entry point
      },
    },
  },
  publicDir: 'public', // Specify the public directory
});