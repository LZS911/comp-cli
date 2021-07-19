"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeLogs = exports.throwInfo = exports.throwError = void 0;
const index_1 = require("./index");
const chalk = require("chalk");
const throwError = (str) => {
    console.log(chalk.red(str));
    process.exit(1);
};
exports.throwError = throwError;
const throwInfo = (str) => {
    console.log(chalk.yellow(str));
};
exports.throwInfo = throwInfo;
const writeLogs = (str, type = chalk.cyan) => {
    if (!index_1.isFunction(type)) {
        return;
    }
    console.log(type(str));
};
exports.writeLogs = writeLogs;
