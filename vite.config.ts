import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.md'],
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },
});