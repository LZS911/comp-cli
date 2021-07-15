"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const file_1 = require("../../../utils/file");
function createEslint(name, pkg) {
    const dependence = {
        devDependencies: {
            '@typescript-eslint/eslint-plugin': '^4.5.0',
            '@typescript-eslint/parser': '^4.5.0',
            eslint: '^7.11.0',
            'eslint-config-react-app': '^6.0.0',
            'eslint-plugin-jest': '^24.1.0',
            'eslint-plugin-react': '^7.21.5',
            'eslint-plugin-react-hooks': '^4.2.0',
            'eslint-plugin-testing-library': '^3.9.2',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    file_1.writeFileTree(data_1.eslintignore(name).targetDir, data_1.eslintignore(name).template);
    file_1.writeFileTree(data_1.eslintrc(name).targetDir, data_1.eslintrc(name).template);
    return packageInfo;
}
exports.default = createEslint;
