const pascalCase = require('pascal-case');
const SVGO = require('svgo');
const fs = require('fs');

const iconName = fileName => pascalCase(fileName.replace('.svg', ''));

const exportPath = dist => fileName =>
    fileName.includes('.svg')
        ? `export ${iconName(fileName)} from '../${dist}/${fileName}';`
        : null;

const writeExports = (dist, svgs, file) =>
    fs.writeFileSync(
        file,
        fs
            .readdirSync(svgs)
            .map(exportPath(dist), 'ascii')
            .join('\n'),
    );

const svgo = prefix =>
    new SVGO({
        plugins: [
            { removeDimensions: true },
            { removeTitle: true },
            { removeViewBox: false },
            {
                cleanupIDs: {
                    prefix: prefix + '-',
                    minify: true,
                },
            },
        ],
    });

const error = (file, err) => {
    console.log('\n\n');
    console.log('\x1b[37m', file);
    throw new Error('\x1b[31m', err);
};

const optimize = (dir, file) => (err, data) =>
    err
        ? error(file, err)
        : svgo(file)
              .optimize(data)
              .then(result => fs.writeFileSync(dir + file, result.data))
              .catch(err => error(file, err));

const filter = dir =>
    fs
        .readdirSync(dir)
        .filter(
            file =>
                !fs.lstatSync(dir + file).isDirectory() && file !== 'index.ts' && file.includes('.svg')
        );

const compress = dir =>
    filter(dir).forEach(file =>
        fs.readFile(dir + file, 'utf8', optimize(dir, file)),
    );

compress('./src/Icons/');
writeExports('icons', './src/Icons/', './src/svg/iconList.js');

compress('./src/Illustrations/');
writeExports(
    'illustrations',
    './src/Illustrations/',
    './src/svg/illustrationList.js',
);
