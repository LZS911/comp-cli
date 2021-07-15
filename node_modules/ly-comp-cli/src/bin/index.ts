#!/usr/bin/env node

/**
 * 指令交互
 * command 获取指令
 * action 指令对应事件
 */
import { program } from 'commander';
import { checkNodeVersion, validateArgsLen } from '../utils';

//先忽略这个报错
// import nodeVersion = require('../../package.json');
const nodeVersion = { version: '1.0.0' };

// console.log('Welcome to ly-comp!');
// console.log(`当前版本号为:${nodeVersion.version}`);

checkNodeVersion('>=8.0.0');

program
  .version(nodeVersion.version)
  .command('new <name>')
  .description('创建一个新的默认模版!')
  .action((name: string) => {
    validateArgsLen(process.argv.length, 4);
    require('../lib/create').create(name);
  });

//
program.parse();
