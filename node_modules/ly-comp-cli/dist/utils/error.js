"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwInfo = exports.throwError = void 0;
const chalk = require("chalk");
const throwError = (str) => {
    console.log(chalk.red(str));
    process.exit(1);
};
exports.throwError = throwError;
const throwInfo = (str) => {
    console.log(chalk.yellow(str));
    process.exit(1);
};
exports.throwInfo = throwInfo;
