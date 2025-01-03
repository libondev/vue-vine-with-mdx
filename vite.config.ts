import { fileURLToPath, URL } from 'node:url'
import mdx from '@mdx-js/rollup'
import TW from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { VineVitePlugin } from 'vue-vine/vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['vue'],
    exclude: ['vue-demi'],
  },

  plugins: [
    mdx({
      providerImportSource: '@mdx-js/vue',
      jsxImportSource: 'vue',
      jsx: true,
      remarkPlugins: [],
      rehypePlugins: [],
    }),

    VueJsx({
      include: ['**/*.mdx', '**/*.jsx', '**/*.tsx'],
    }),

    Vue(),

    VineVitePlugin(),

    TW(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
