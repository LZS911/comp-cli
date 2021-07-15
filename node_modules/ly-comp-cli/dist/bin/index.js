#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 指令交互
 * command 获取指令
 * action 指令对应事件
 */
const commander_1 = require("commander");
const utils_1 = require("../utils");
//先忽略这个报错
// import nodeVersion = require('../../package.json');
const nodeVersion = { version: '1.0.0' };
// console.log('Welcome to ly-comp!');
// console.log(`当前版本号为:${nodeVersion.version}`);
utils_1.checkNodeVersion('>=8.0.0');
commander_1.program
    .version(nodeVersion.version)
    .command('new <name>')
    .description('创建一个新的默认模版!')
    .action((name) => {
    utils_1.validateArgsLen(process.argv.length, 4);
    require('../lib/create').create(name);
});
//
commander_1.program.parse();
