import { writeFileTree } from '../../../utils/file';

export default function createVite(name: string, pkg, files) {
  const dependence = {
    scripts: {
      dev: 'vite',
      build: 'tsc && vite build',
      serve: 'vite preview',
      test: 'jest',
    },
    devDependencies: {
      vite: '^2.4.2',
      '@vitejs/plugin-react-refresh': '^1.3.1',
    },
  };
  const packageInfo = {
    ...pkg,
    scripts: {
      ...dependence.scripts,
    },
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };

  const fileName = 'vite.config.js';
  const template = `import { defineConfig } from 'vite';
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
});`;

  // writeFileTree(targetDir, template);
  files[fileName] = template;

  return packageInfo;
}