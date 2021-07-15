"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createJest(name, pkg) {
    const dependence = {
        devDependencies: {
            '@testing-library/react': '^11.1.0',
            '@types/jest': '^26.0.15',
            'babel-jest': '^26.0.6',
            jest: '26.6.0',
            'react-test-renderer': '^17.0.2',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    return packageInfo;
}
exports.default = createJest;
