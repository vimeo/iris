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

const validComponent = name => name && blackList.every(bad => !name.includes(bad));

const blackList = [
    "index",
    "withCopyAbility",
    "withCharacterCount",
    "-Docs",
    ".story",
    "Helpers",
    "Styled",
    "Variable",
    "Types",
    "Settings"
];

module.exports = parseTsDocsData;