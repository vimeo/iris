const patternData = require('../../data/tsDocs.json');

parseTsDocsData= () => {  
    let patternArray = [];
    patternData.children.map((item) => {
        const filePath = item.name.replace(/"/g,"");

        if(filePath.indexOf('globals/') < 0) {

            const componentName = filePath.split('/')[1];

            const excludedNames = [
                'index'
            ];

            if(excludedNames.indexOf(componentName)) {
                patternArray.push({
                        name: componentName,
                        path: `./${filePath}`
                });
            }
        }
    });

    return patternArray;
}

module.exports =  parseTsDocsData;
