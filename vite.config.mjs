import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    server: {
        port: 3000,
    },
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
});

