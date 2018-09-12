parseTsDocsData = () => {
    const patternData = require('../../data/tsDocs.json');
    let patternArray = [];
    patternData.children.map((item) => {
        const filePath = item.name.replace(/"/g, "");

        if (filePath.indexOf('globals/') < 0) {

            const componentName = filePath.split('/')[1];

            const excludedNames = [
                'index',
            ];

            // exclude typed index files and any Docs files made with TS
            if (componentName && excludedNames.indexOf(componentName) && componentName.indexOf('-Docs') < 0) {
                patternArray.push({
                    name: componentName,
                    path: `./${filePath}`
                });
            }
        }
    });

    return patternArray;
}

module.exports = parseTsDocsData;