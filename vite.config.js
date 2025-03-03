// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Change this to 'dist' to match Vercel config
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Update entry point path
      },
    },
  },
  publicDir: 'public', // Specify the public directory
});