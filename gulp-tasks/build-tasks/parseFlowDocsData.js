

parseFlowDocsData= () => {  
    const patternData = require('../../data/componentAPITransformed.json');
   
    let patternArray = [];
    
    for (key in patternData) {
        patternArray.push({
            name: key,
            path: `./${key}`
        })
    }
    return patternArray;
}

module.exports =  parseFlowDocsData;
