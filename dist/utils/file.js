"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDir = exports.writeFileTree = void 0;
const path = require('path');
const fs = require('fs-extra');
/**
 * 写入文件内容
 */
const writeFileTree = (dir, files) => {
    Object.keys(files).forEach(name => {
        const filePath = path.join(dir, name);
        fs.ensureDirSync(path.dirname(filePath));
        fs.writeFileSync(filePath, files[name]);
    });
};
exports.writeFileTree = writeFileTree;
/**
 * 获取路径下所有文件夹名称, 不递归
 * @param cwd 路径, 默认为当前路径
 */
const getAllDir = (cwd = '.') => {
    const items = fs.readdirSync(cwd);
    const dirs = items.filter(item => {
        return fs.statSync(item).isDirectory();
    });
    return dirs;
};
exports.getAllDir = getAllDir;
