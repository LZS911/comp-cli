const path = require('path');
const fs = require('fs-extra');

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
