"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateGit = name => {
    return {
        targetDir: `./${name}`,
        fileName: '.gitignore',
        template: `# See https://help.github.com/articles/ignoring-files/ for more about ignoring file
 # dependencies
 /node_modules
 /.pnp
 .pnp.js
 
 # testing
 /coverage
 
 # production
 /build
 
 # misc
 .DS_Store
 .env.local
 .env.development.local
 .env.test.local
 .env.production.local
 
 npm-debug.log*
 yarn-debug.log*
 yarn-error.log*
  `,
    };
};
exports.default = generateGit;
