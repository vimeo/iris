/* eslint-env node*/
const fs = require('fs');
const walk = require('walk');
const upperCamelCase = require('uppercamelcase');
const files = [];
const svgTest = /^(.*\.((svg)$))?[^.]*$/i;



// Walker options
const walker = walk.walk('src/components/icons', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    if (svgTest.test(stat.name)) {
        const fileName = stat.name.split('.svg')[0];
        const svgPascalName = upperCamelCase(fileName);
        const entry = {
            'name': svgPascalName,
            'filename': fileName,
            'filepath': root + '/' + stat.name,
        };
        files.push(entry);
    }
    next();
});

walker.on('end', function() {
    const destinationPath = 'data/svgList.json';
    fs.writeFile(destinationPath, JSON.stringify(files), function(error) {
        if (error) {
            console.error('Error while writing ' + destinationPath + ': ' + error.message);
        }
    });
});
