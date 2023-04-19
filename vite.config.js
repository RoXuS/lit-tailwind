import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import tailwindTransform from 'postcss-lit';

export default defineConfig({
  css: {
    postcss: {
      syntax: 'postcss-lit',
      plugins: [
        tailwindcss({
          content: {
            files: ['./src/lit-tailwind.ts'],
            transform: {
              ts: tailwindTransform.tailwindTransform,
            },
          },
        }),
      ],
    }
  },
});
