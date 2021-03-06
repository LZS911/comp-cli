"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createBabel(name, pkg, files) {
    const dependence = {
        devDependencies: {
            '@babel/core': '^7.14.6',
            '@babel/preset-env': '^7.14.7',
            '@babel/preset-react': '^7.14.5',
            '@babel/preset-typescript': '^7.14.5',
            'babel-jest': '^26.0.6',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    const fileName = 'babel.config.js';
    const template = `module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
};
`;
    files[fileName] = template;
    return packageInfo;
}
exports.default = createBabel;
