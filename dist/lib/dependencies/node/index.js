"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createNode(name, pkg) {
    const dependence = {
        devDependencies: {
            '@types/node': '^12.0.0',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    return packageInfo;
}
exports.default = createNode;
