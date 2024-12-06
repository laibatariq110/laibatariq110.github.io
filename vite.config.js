import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/laibatariq110.github.io/', // Update this with your GitHub Pages repository name
});
