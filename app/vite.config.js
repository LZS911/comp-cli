import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    //配置全局注入 react 引用
    // jsxInject: "import React from 'react'",
  },
  resolve: {
    // alias: [
    //   {
    //     find: /^@/,
    //     replacement: path.resolve(__dirname, 'src'),
    //   },
    // ],
  },
});