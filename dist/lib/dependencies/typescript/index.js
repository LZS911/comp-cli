"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("../../../utils/file");
function createTypeScript(name, pkg) {
    const dependence = {
        devDependencies: {
            typescript: '^4.3.5',
            '@vitejs/plugin-react-refresh': '^1.3.1',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    const targetDir = `./${name}`;
    const template = {
        'tsconfig.json': `{
  "compilerOptions": {
    "baseUrl": "./",
    "strictNullChecks": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "jsx": "preserve",
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "noImplicitAny": true,
    "target": "esnext",
    "module": "esnext",
    "lib": ["dom", "es2017"],
    "skipLibCheck": true,
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
    "isolatedModules": true
  },
  "exclude": ["node_modules", "lib", "es"]
}
    `,
    };
    file_1.writeFileTree(targetDir, template);
    return packageInfo;
}
exports.default = createTypeScript;
