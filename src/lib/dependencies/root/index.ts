import { writeFileTree } from './../../../utils/file';
import { executeCommand, objToStr } from '../../../utils';
import { getAllDir } from '../../../utils/file';
import { writeLogs } from '../../../utils/log';
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
export default async function createRoot(
  projectName: string,
  targetDir: string,
  cwd: string,
  files: {},
) {
  const dirs = getAllDir();

  //存在
  if (dirs.includes(projectName)) {
    //创建项目文件夹
    const { action } = await inquirer.prompt([
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
      writeLogs(`\nRemoving ${targetDir}...`);
      await executeCommand(`rm -rf ${targetDir}`, cwd);
    }
  }
  ['prettier', 'indexHtml', 'readme', 'git', 'git_sh'].forEach(item => {
    const templateInfo = require(`./template/${item}`).default(projectName);
    files[templateInfo.fileName] = templateInfo.template;
  });
}
