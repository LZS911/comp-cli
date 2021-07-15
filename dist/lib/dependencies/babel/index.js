"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("../../../utils/file");
function createBabel(name, pkg) {
    const dependence = {
        devDependencies: {
            '@babel/preset-env': '^7.14.7',
            '@babel/preset-react': '^7.14.5',
            '@babel/preset-typescript': '^7.14.5',
            'babel-jest': '^26.0.6',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    const targetDir = `./${name}`;
    const template = {
        'babel.config.js': `module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
};
`,
    };
    file_1.writeFileTree(targetDir, template);
    return packageInfo;
}
exports.default = createBabel;
