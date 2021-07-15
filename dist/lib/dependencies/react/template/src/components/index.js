"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compModules = import.meta.globEager('./*/index.tsx');
const comps = {};
for (const path in compModules) {
    const mod = compModules[path];
    comps[mod.default.name] = mod.default;
}
exports.default = comps;
