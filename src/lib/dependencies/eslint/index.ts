import { eslintignore, eslintrc } from './data';

export default function createEslint(name: string, pkg, files) {
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
  const packageInfo = {
    ...pkg,
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };

  const _eslint = eslintignore(name);
  const _eslintrc = eslintrc(name);
  files[_eslint.fileName] = _eslint.template;
  files[_eslintrc.fileName] = _eslintrc.template;
  return packageInfo;
}
