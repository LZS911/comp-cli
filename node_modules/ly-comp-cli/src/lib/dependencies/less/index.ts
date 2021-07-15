export default function createLess(name: string, pkg) {
  const dependence = {
    devDependencies: {
      less: '^4.1.1',
      'less-loader': '^5.0.0',
    },
  };
  const packageInfo = {
    ...pkg,
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };

  return packageInfo;
}
