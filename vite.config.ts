/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from './config/unocss'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/

export default defineConfig({
  
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  build: {
    minify: true,
    sourcemap: true, // 输出单独 source文件
    lib: {
      entry: './src/entry.ts',
      name: 'YUI',
      fileName: module => `y-ui-${module}.js`,
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        exports: 'named'
      },
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});