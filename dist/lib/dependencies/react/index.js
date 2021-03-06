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
const file_1 = require("./../../../utils/file");
const globby = require('globby');
const path = require('path');
function createReact(name, targetDir, pkg, files) {
    return __awaiter(this, void 0, void 0, function* () {
        const dependence = {
            dependencies: {
                react: '^17.0.0',
                'react-dom': '^17.0.0',
            },
            devDependencies: {
                '@types/react': '^17.0.0',
                '@types/react-dom': '^17.0.0',
            },
        };
        const packageInfo = Object.assign(Object.assign({}, pkg), { dependencies: Object.assign(Object.assign({}, pkg.dependencies), dependence.dependencies), devDependencies: Object.assign(Object.assign({}, pkg.devDependencies), dependence.devDependencies) });
        const baseDir = path.resolve(file_1.extractCallDir(), 'template');
        const filesAll = yield globby(['**/*'], { cwd: baseDir });
        filesAll.forEach(rawPath => {
            const sourcePath = path.resolve(baseDir, rawPath);
            const content = file_1.renderFile(sourcePath);
            if (Buffer.isBuffer(content) || /[^\s]/.test(content)) {
                files[rawPath] = content;
            }
        });
        return packageInfo;
    });
}
exports.default = createReact;
