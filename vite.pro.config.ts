import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    outDir: path.resolve(__dirname, './ui-pro/dist'),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, './src/pro/index.tsx'),
      name: 'dashflowxUiPro',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@dashflowx/core', '@dashflowx/ui'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@dashflowx/core': 'dashflowx',
          '@dashflowx/ui': 'dashflowxUi',
        },
      },
    },
  },
  plugins: [react(), dts({ skipDiagnostics: true, rollupTypes: true, outDir: 'ui-pro/dist' })],
});
