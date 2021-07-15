"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createLess(name, pkg) {
    const dependence = {
        devDependencies: {
            less: '^4.1.1',
            'less-loader': '^5.0.0',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    return packageInfo;
}
exports.default = createLess;
