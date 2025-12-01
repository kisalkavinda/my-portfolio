import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/my-portfolio/' : '/';

  return {
    base,
    plugins: [
      react(),
      visualizer({
        filename: './dist/stats.html',
        open: true,
      }),
    ],
    build: {
      sourcemap: true,
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});