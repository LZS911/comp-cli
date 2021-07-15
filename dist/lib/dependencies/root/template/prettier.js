"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generatePrettier = name => {
    return {
        targetDir: `./${name}`,
        template: {
            '.prettierrc': `{
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
        },
    };
};
exports.default = generatePrettier;
