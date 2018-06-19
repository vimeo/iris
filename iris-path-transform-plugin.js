/* eslint-env node*/
/**
 * This is a webpack/babel plugin to transform "member imports"
 * within an Iris consumer app from something like:
 * `import { Avatar } from '@vimeo/iris';`
 * to "default imports" like:
 * `import Avatar from '@vimeo/iris/dist/Avatar';`
 *
 * NOTE: Include the 'babel-plugin-transform-imports' module as a
 * devDependency in the package.json of the consumer app.
 */

const transformImports = require('babel-plugin-transform-imports');
const irisComponentPaths = require('./dist/componentMap.json');

/**
 * Map iris "member" import names to direct "default dist locations
 *
 * @param {string} importName - name of the Iris module
 * @return {string} - the import path
 */
const irisImportMapper = (importName) => {
    // Look up the path for import name, removing the leading relative import '.'
    const path = irisComponentPaths[importName].replace(/^\./, '');

    // Don't fail silently if importing a module for which we don't have a path
    if (!path) {
        throw new Error(`Could not find the import path for ${importName}`);
    }

    // Prepend the dist path to dist location of the module
    return `@vimeo/iris/dist/${path}`;
};

module.exports = [transformImports, {
    '@vimeo/iris': {
        // Map the import name to the "real" full path:
        'transform': irisImportMapper,
        // Throws an error if import would import the entire lib:
        preventFullImport: true,
    },
}];
