import { writeFileTree } from '../../../utils/file';

export default function createTypeScript(name: string, pkg) {
  const dependence = {
    devDependencies: {
      typescript: '^4.3.5',
      '@vitejs/plugin-react-refresh': '^1.3.1',
    },
  };
  const packageInfo = {
    ...pkg,
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };

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

  writeFileTree(targetDir, template);

  return packageInfo;
}
