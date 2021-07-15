export default function createReact(name: string, pkg) {
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

  return packageInfo;
}
