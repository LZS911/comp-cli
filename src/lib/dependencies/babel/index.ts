import { writeFileTree } from '../../../utils/file';

export default function createBabel(name: string, pkg) {
  const dependence = {
    devDependencies: {
      '@babel/preset-env': '^7.14.7',
      '@babel/preset-react': '^7.14.5',
      '@babel/preset-typescript': '^7.14.5',
      'babel-jest': '^26.0.6',
    },
  };
  const packageInfo = {
    ...pkg,
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };

  const targetDir = `./${name}`;
  const template = {
    'babel.config.js': `module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
};
`,
  };
  writeFileTree(targetDir, template);
  return packageInfo;
}
