const compModules = import.meta.globEager('./*/index.tsx');

const comps: any = {};
for (const path in compModules) {
  const mod = compModules[path];
  comps[mod.default.name] = mod.default;
}
export default comps;
