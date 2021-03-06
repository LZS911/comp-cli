import { renderFile, extractCallDir } from './../../../utils/file';
const globby = require('globby');
const path = require('path');

export default async function createReact(name: string, targetDir, pkg, files) {
  const dependence = {
    dependencies: {
      react: '^17.0.0',
      'react-dom': '^17.0.0',
    },
    devDependencies: {
      '@types/react': '^17.0.0',
      '@types/react-dom': '^17.0.0',
    },
  };
  const packageInfo = {
    ...pkg,
    dependencies: {
      ...pkg.dependencies,
      ...dependence.dependencies,
    },
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };
  const baseDir = path.resolve(extractCallDir(), 'template');
  const filesAll = await globby(['**/*'], { cwd: baseDir });
  filesAll.forEach(rawPath => {
    const sourcePath = path.resolve(baseDir, rawPath);
    const content = renderFile(sourcePath);

    if (Buffer.isBuffer(content) || /[^\s]/.test(content)) {
      files[rawPath] = content;
    }
  });
  return packageInfo;
}
