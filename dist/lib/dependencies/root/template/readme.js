"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateGit = name => {
    return {
        targetDir: `./${name}`,
        template: {
            'README.md': ``,
        },
    };
};
exports.default = generateGit;
