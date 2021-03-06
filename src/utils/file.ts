const path = require('path');
const fs = require('fs-extra');
const globby = require('globby');
const ejs = require('ejs');

/**
 * 写入文件内容
 */
export const writeFileTree = (dir: string, files: any) => {
  Object.keys(files).forEach(name => {
    const filePath = path.join(dir, name);
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, files[name]);
  });
};

/**
 * 获取路径下所有文件夹名称, 不递归
 * @param cwd 路径, 默认为当前路径
 */
export const getAllDir = (cwd: string = '.') => {
  const items = fs.readdirSync(cwd);

  const dirs: string[] = items.filter(item => {
    return fs.statSync(item).isDirectory();
  });
  return dirs;
};

/**
 * 读取所有文件内容
 * @param cwd 路径, 默认为当前路径
 * 返回格式:[
 * targetDri:生成路径,
 * {
 *  fileName:文件名称,
 *  content:文件内容
 * }
 * ]
 */
export const renderFile = (name: string, cwd: string = '.') => {
  const fs = require('fs-extra');
  const template = fs.readFileSync(name, 'utf-8');
  return ejs.render(template);
};

/**
  //获取调用栈信息
 */
export const extractCallDir = () => {
  const obj = { stack: null };
  Error.captureStackTrace(obj);
  // 将会排在调用栈中的第3个，也就是 obj.stack.split('\n')[2]
  const callSite = obj.stack.split('\n')[2];
  // the regexp for the stack when called inside a named function
  const namedStackRegExp = /\s\((.*):\d+:\d+\)$/;
  // the regexp for the stack when called inside an anonymous
  const anonymousStackRegExp = /at (.*):\d+:\d+$/;

  let matchResult = callSite.match(namedStackRegExp);
  if (!matchResult) {
    matchResult = callSite.match(anonymousStackRegExp);
  }
  // console.log(matchResult);

  const fileName = matchResult[1];
  // 获取对应文件的目录;
  return path.dirname(fileName);
};
