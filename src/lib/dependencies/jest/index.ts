export default function createJest(name: string, pkg) {
  const dependence = {
    devDependencies: {
      '@testing-library/react': '^11.1.0',
      '@types/jest': '^26.0.15',
      'babel-jest': '^26.0.6',
      jest: '26.6.0',
      'react-test-renderer': '^17.0.2',
    },
  };
  const packageInfo = {
    ...pkg,
    devDependencies: { ...pkg.devDependencies, ...dependence.devDependencies },
  };

  return packageInfo;
}
