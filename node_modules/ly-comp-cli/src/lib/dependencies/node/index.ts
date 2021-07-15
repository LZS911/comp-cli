export default function createNode(name: string, pkg) {
  const dependence = {
    devDependencies: {
      '@types/node': '^12.0.0',
    },
  };
  const packageInfo = {
    ...pkg,
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };

  return packageInfo;
}
