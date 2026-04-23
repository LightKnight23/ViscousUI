import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ include: ['src'] })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ViscousUI',
      formats: ['es', 'umd'],
      fileName: (format) => `viscous-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'motion/react', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'motion/react': 'motion',
          'lucide-react': 'LucideReact'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
