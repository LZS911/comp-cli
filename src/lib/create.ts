import { objToStr } from '../utils';
import { writeFileTree } from '../utils/file';
import { writeLogs } from './../utils/log';
import createRoot from './dependencies/root';
const path = require('path');
const chalk = require('chalk');

//需要添加的依赖项, 先写死, 后续支持自定义
const deps = ['babel', 'eslint', 'jest', 'less', 'node', 'react', 'typescript', 'vite'];

export const create = async (projectName: string) => {
  //当前路径
  const cwd = process.cwd();

  //创建的项目的绝对路径
  const targetDir = path.resolve(cwd, projectName);

  await createRoot(projectName, targetDir, cwd, deps);

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

  writeFileTree(targetDir, { 'package.json': objToStr(pkg) });

  writeLogs(` \n 项目${projectName}创建成功! \n cd ${projectName} \n yarn dev `, chalk.green);
};
