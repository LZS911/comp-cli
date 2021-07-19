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
const utils_1 = require("../../../utils");
const file_1 = require("../../../utils/file");
const log_1 = require("../../../utils/log");
// import { generatePrettier, generateIndexHtml } from '../template.data';
const inquirer = require('inquirer');
const chalk = require('chalk');
/**
 * 创建项目文件夹和一些基本配置
 * package.json
 * @param projectName 项目名称
 * @param targetDir 项目绝对路径
 * @param cwd 当前路径
 */
function createRoot(projectName, targetDir, cwd, files) {
    return __awaiter(this, void 0, void 0, function* () {
        const dirs = file_1.getAllDir();
        //存在
        if (dirs.includes(projectName)) {
            //创建项目文件夹
            const { action } = yield inquirer.prompt([
                {
                    name: 'action',
                    type: 'list',
                    message: `Target directory ${chalk.cyan(targetDir)}
      already exists. Pick an action:`,
                    choices: [
                        { name: 'Overwrite', value: 'overwrite' },
                        //TODO
                        // {
                        //   name: 'Merge',
                        //   value: 'merge'
                        // },
                        {
                            name: 'Cancel',
                            value: false,
                        },
                    ],
                },
            ]);
            if (!action) {
                return;
            }
            if (action === 'overwrite') {
                log_1.writeLogs(`\nRemoving ${targetDir}...`);
                yield utils_1.executeCommand(`rm -rf ${targetDir}`, cwd);
            }
        }
        ['prettier', 'indexHtml', 'readme', 'git'].forEach(item => {
            const templateInfo = require(`./template/${item}`).default(projectName);
            files[templateInfo.fileName] = templateInfo.template;
        });
    });
}
exports.default = createRoot;
