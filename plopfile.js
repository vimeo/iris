/* eslint-env node*/

module.exports = (plop) => {


    // We declare a new generator
    plop.setGenerator('Component', {

    // Succintly describes what generator does.
        description: 'Create a Component folder structure',

    // Get inputs from the user.

        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the Component\'s name? (PascalCasePlease, no spaces)',
                validate(value) {
                    if ((/.+/).test(value)) {
                        return true;
                    }
                    return 'name is required';
                },
            },
            {
                type: 'list',
                name: 'componentType',
                message: 'What type of component will this be?',
                choices: [
                    { name: 'Stateless Functional Component (preferred)', value: 'stateless' },
                    { name: 'Stateful Class Component (are you sure?)', value: 'stateful' },
                ],
            },

        ],

    // List of actions to take.
    // Here we "add" new files from our templates.
        actions: [
            {
                type: 'add',
                path: 'src/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'templates/plop-componentTemplates/{componentType}/ComponentTSX.js',
            },
            {
                type: 'add',
                path: 'src/{{pascalCase name}}/{{pascalCase name}}-Docs.jsx',
                templateFile: 'templates/plop-componentTemplates/ComponentDocsTSX.js',
            },
            {
                type: 'add',
                path: 'src/{{pascalCase name}}/index.ts',
                templateFile: 'templates/plop-componentTemplates/ComponentIndexTS.js',
            },
        ],

    });

    plop.setGenerator('Additional Pattern Entry', {

    // Succintly describes what generator does.
        description: "Create a pattern entry for patterns that don't have a specific React Component",

    // Get inputs from the user.

        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Pattern (PascalCasePlease)?',
                validate(value) {
                    if ((/.+/).test(value)) {
                        return true;
                    }
                    return 'name is required';
                },
            },

        ],

    // List of actions to take.
    // Here we "add" new files from our templates.
        actions: [
            {
                type: 'add',
                path: 'docs/additional-entries/{{pascalCase name}}/{{pascalCase name}}-Docs.jsx',
                templateFile: 'templates/plop-componentTemplates/PatternEntryDocsJSX.js',
            },
        ],

    });

    // We declare a new generator called "module"
    plop.setGenerator('Stand-Alone Page', {

    // Succintly describes what generator does.
        description: 'Create a blank stand-alone page',

    // Get inputs from the user.

        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Page (PascalCasePlease)?',
                validate(value) {
                    if ((/.+/).test(value)) {
                        return true;
                    }
                    return 'name is required';
                },
            },

        ],

    // List of actions to take.
    // Here we "add" new files from our templates.
        actions: [
            {
                type: 'add',
                path: 'docs/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'templates/plop-componentTemplates/StandAlonePageJSX.js',
            },
        ],

    });

};
