import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  server: {
    port: 3000,
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [
    checker({
      typescript: {
        tsconfigPath: resolve(__dirname, 'tsconfig.json'),
      },
    }),
  ],
});
