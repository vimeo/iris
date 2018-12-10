const pascalCase = require('pascal-case');
const SVGO = require('svgo');
const fs = require('fs');

const iconName = fileName => pascalCase(fileName.replace('.svg', ''));

const exportPath = dist => fileName => fileName.includes('.svg') ?
    `export ${iconName(fileName)} from '../${dist}/${fileName}';` :
    null;

const writeExports = (dist, svgs, file) => fs.writeFileSync(file,
    fs.readdirSync(svgs)
    .map(exportPath(dist), 'ascii')
    .join('\n'));

const svgo = prefix => new SVGO({
    plugins: [{
            removeDimensions: true
        },
        {
            removeTitle: true
        },
        {
            removeViewBox: false
        },
        {
            cleanupIDs: {
                prefix: prefix + '-',
                minify: true
            }
        }
    ]
});

const compress = dir => {
    fs.readdirSync(dir).forEach(file => {
        const path = dir + file;

        if (!fs.lstatSync(path).isDirectory()) {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) throw err;

                console.log(path);
                svgo(file).optimize(data).then((result) => {
                    fs.writeFileSync(path, result.data);
                });

            });
        }
    })
};

compress('./src/icons/');
writeExports('icons', './src/icons/', './src/svg/iconList.js');

compress('./src/illustrations/');
writeExports('illustrations', './src/illustrations/', './src/svg/illustrationList.js');