import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/laibatariq110.github.io/', 
  plugins: [react()],
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
  },
});
