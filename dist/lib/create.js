"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const utils_1 = require("../utils");
const file_1 = require("../utils/file");
const log_1 = require("./../utils/log");
const root_1 = require("./dependencies/root");
const path = require('path');
const chalk = require('chalk');
//需要添加的依赖项, 先写死, 后续支持自定义
const deps = ['babel', 'eslint', 'jest', 'less', 'node', 'react', 'typescript', 'vite'];
const create = (projectName) => __awaiter(void 0, void 0, void 0, function* () {
    //当前路径
    const cwd = process.cwd();
    //创建的项目的绝对路径
    const targetDir = path.resolve(cwd, projectName);
    yield root_1.default(projectName, targetDir, cwd, deps);
    //pkg info
    //创建package.json 文件 -- pkg对象, 通过该对象生成
    let pkg = {
        name: projectName,
        version: '1.0.0',
        main: 'index.js',
        license: 'MIT',
        scripts: {},
        dependencies: {},
        devDependencies: {},
    };
    //遍历依赖项 require dependencies目录下文件夹, 通过文件夹下模版内容生成项目, 同时将依赖添加到pkg中
    deps.forEach(item => {
        pkg = require(`./dependencies/${item}`).default(projectName, pkg);
    });
    file_1.writeFileTree(targetDir, { 'package.json': utils_1.objToStr(pkg) });
    log_1.writeLogs(` \n 项目${projectName}创建成功! \n cd ${projectName} \n yarn dev `, chalk.green);
});
exports.create = create;
