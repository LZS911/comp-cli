const generatePrettier = name => {
  return {
    targetDir: `./${name}`,
    fileName: '.prettierrc',
    template: `{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "proseWrap": "never",
  "arrowParens": "avoid",
  "overrides": [
    {
      "files": ".prettierrc",
      "options": {
        "parser": "json"
      }
    }
  ]
}
  `,
  };
};

export default generatePrettier;
