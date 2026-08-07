import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/fitness-website/',
  plugins: [react(), tailwindcss()],

  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('lenis')) return 'scroll';
            if (id.includes('react-dom') || id.includes('/react/')) return 'vendor';
          }
        },
      },
    },
  },
});
