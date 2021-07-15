const generateGit = name => {
  return {
    targetDir: `./${name}`,
    template: {
      'README.md': ``,
    },
  };
};

export default generateGit;
