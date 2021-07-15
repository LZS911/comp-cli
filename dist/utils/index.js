"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = exports.objToStr = exports.executeCommand = exports.validateArgsLen = exports.checkNodeVersion = void 0;
const log_1 = require("./log");
const semver = require('semver');
const execa = require('execa');
/**
 * 检验用户node版本号
 * @param wanted 期待的版本号
 * @param cliName 脚手架名称
 */
const checkNodeVersion = (wanted, cliName = 'ly-comp') => {
    if (semver.satisfies(process.version, wanted)) {
        return;
    }
    //版本号不符合要求
    const errorTips = '当前Node版本为' +
        process.version +
        ',但是 ' +
        cliName +
        ' 需要 Node 版本 ' +
        wanted +
        '.\n请更新您的Node.';
    log_1.throwError(errorTips);
};
exports.checkNodeVersion = checkNodeVersion;
/**
 * 校验用户输入的指令数量
 * @param argvLen 用户输入的指令长度
 * @param maxLen  最大支持输入的指令长度
 */
const validateArgsLen = (argvLen, maxLen) => {
    if (argvLen > maxLen) {
        const infoTips = 'Info: You provided more than argument. the rest are ignored.';
        log_1.throwInfo(infoTips);
    }
};
exports.validateArgsLen = validateArgsLen;
/**
 * execa:  一个child_process封装库
 * @param command 指令名称
 * @param cwd 执行路径
 * @param args 指令参数
 */
const executeCommand = (command, cwd, args) => {
    if (!args) {
        [command, ...args] = command.split(/\s+/);
    }
    return execa(command, args, { cwd });
};
exports.executeCommand = executeCommand;
/**
 * 将对象转化为字符串
 *  JSON.stringify 第二个参数为处理函数和数组时
 * @param obj 需要转化的对象
 * @param space: 缩进的空白字符串
 */
const objToStr = (obj, space = 2) => {
    return JSON.stringify(obj, null, space) + '\n';
};
exports.objToStr = objToStr;
const isFunction = (val) => {
    return typeof val === 'function';
};
exports.isFunction = isFunction;
