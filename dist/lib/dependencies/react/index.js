"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createReact(name, pkg) {
    const dependence = {
        dependencies: {
            react: '^17.0.0',
            'react-dom': '^17.0.0',
        },
        devDependencies: {
            '@types/react': '^17.0.0',
            '@types/react-dom': '^17.0.0',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { dependencies: Object.assign(Object.assign({}, pkg.dependencies), dependence.dependencies), devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    return packageInfo;
}
exports.default = createReact;
