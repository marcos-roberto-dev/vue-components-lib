/// <reference types="vitest/config" />
import { fileURLToPath } from "url";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import dts from 'vite-plugin-dts'
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
    dts({ tsconfigPath: './tsconfig.app.json', outDir: './dist/types' })
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
      "@components": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src/components"),
    },
  },
  optimizeDeps: {
    include: ["vue"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "LibComponents",
      fileName: "lib-components",
    },
    rollupOptions: {
      external: ['vue'],
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
    exclude: [...configDefaults.exclude, 'dist/**', 'node_modules/**'],
    css: false,
    setupFiles: './tests/setup.ts',
    coverage: {
      include: ['src/components/**/*.vue'],
      exclude: ['node_modules', 'dist'],
    }
  },
});
