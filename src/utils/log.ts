import { isFunction } from './index';
import chalk = require('chalk');

export const throwError = (str: string) => {
  console.log(chalk.red(str));
  process.exit(1);
};

export const throwInfo = (str: string) => {
  console.log(chalk.yellow(str));
  process.exit(1);
};

export const writeLogs = (str: string, type: any = chalk.cyan) => {
  if (!isFunction(type)) {
    return;
  }

  console.log(type(str));
};
