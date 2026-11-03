import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  optimizeDeps: { exclude: ['opencascade.js'] },
  build: { target: 'esnext' },
});
