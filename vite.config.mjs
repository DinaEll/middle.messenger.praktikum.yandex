import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
// import path from 'path';
export default defineConfig({
    root: 'src',
    server: {
        port: 3000,
    },
    build: {
        outDir: '../dist',
    },
    plugins: [
        handlebars({
            partialDirectory: './src',
            //А в чем разница между этим и этим вариантами
            // partialDirectory: path.resolve(__dirname, 'partials'),
        }),
    ],
});




