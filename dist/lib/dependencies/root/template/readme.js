"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateGit = name => {
    return {
        targetDir: `./${name}`,
        fileName: 'README.md',
        template: ``,
    };
};
exports.default = generateGit;
