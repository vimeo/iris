const parseTsDocsData = () => {
    const patternData = require("../../data/tsDocs.json");
    let patternArray = [];
    patternData.children.map(item => {
        const filePath = item.name.replace(/"/g, "");
        const componentName = filePath.split("/")[1];

        if (
            !filePath.includes("globals/") && 
            validComponent(componentName)
        ) {
            patternArray.push({
                name: componentName,
                path: `./${filePath}`
            });
        }
    });

    return patternArray;
};

const validComponent = name =>
    name &&
    !name.includes("index") &&
    !name.includes("-Docs") &&
    !name.includes(".story");

module.exports = parseTsDocsData;