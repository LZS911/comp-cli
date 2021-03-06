"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createTypeScript(name, pkg, files) {
    const dependence = {
        devDependencies: {
            typescript: '^4.3.5',
            '@vitejs/plugin-react-refresh': '^1.3.1',
        },
    };
    const packageInfo = Object.assign(Object.assign({}, pkg), { devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
    const fileName = 'tsconfig.json';
    const template = `{
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
    `;
    files[fileName] = template;
    return packageInfo;
}
exports.default = createTypeScript;
