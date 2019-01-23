const fs = require('fs');

const strip = fileName => fileName.replace('.tsx', '');

const exportPath = dist => fileName =>
    !fileName.includes('index') ?
    `export { ${strip(fileName)} } from './${strip(fileName)}';` :
    null;

const writeExports = (dist, svgs, file) =>
    fs.writeFileSync(
        file,
        fs
        .readdirSync(svgs)
        .map(exportPath(dist), 'ascii')
        .join('\n'),
    );

console.log("\x1b[32m", "Generating SVG React component indexes...");

writeExports(
    'icons',
    './src/Icons/',
    './src/Icons/index.ts'
);

writeExports(
    'illustrations',
    './src/Illustrations/',
    './src/Illustrations/index.ts',
);