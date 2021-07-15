"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("../../../utils/file");
function createVite(name, pkg) {
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
    const packageInfo = Object.assign(Object.assign({}, pkg), { scripts: Object.assign({}, dependence.scripts), devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    const targetDir = `./${name}`;
    const template = {
        'vite.config.js': `import { defineConfig } from 'vite';
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
});`,
    };
    file_1.writeFileTree(targetDir, template);
    return packageInfo;
}
exports.default = createVite;
