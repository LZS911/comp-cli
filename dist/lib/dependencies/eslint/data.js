"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslintignore = exports.eslintrc = void 0;
const eslintrc = (name) => {
    return {
        targetDir: `./${name}`,
        fileName: '.eslintrc.js',
        template: `module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-testing-library',
    'eslint-plugin-jest',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'prettier/prettier': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'array-bracket-spacing': 2,
    'no-var': 2,
    'no-eval': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'key-spacing': 2,
    'brace-style': 2,
    'object-curly-spacing': [2, 'always'],
    // 设置 typescript-eslint 规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/camelcase': 0, // 目前埋点有部分字段无法更换
    '@typescript-eslint/no-non-null-assertion': 0, // 允许非空断言运算符
    'func-call-spacing': 0,
    'no-spaced-func': 0,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
    'function-paren-newline': 0,
    'no-confusing-arrow': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    eqeqeq: 0,
    radix: 0,
    camelcase: 0,
    'no-restricted-syntax': 0,
    'no-extra-boolean-cast': 0,
    'array-callback-return': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'func-names': 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'no-restricted-globals': 0,
    'no-useless-return': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'max-len': 0,
    'no-shadow': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-param-reassign': 1,
    'import/prefer-default-export': 0,
    'import/order': 0,
    'spaced-comment': 0,
    'object-curly-newline': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        args: 'none',
      },
    ], // TODO 后期逐步替换
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 0, // TODO
  },
};`,
    };
};
exports.eslintrc = eslintrc;
const eslintignore = (name) => {
    return {
        targetDir: `./${name}`,
        fileName: '.eslintignore',
        template: `node_modules/**/*  `,
    };
};
exports.eslintignore = eslintignore;
