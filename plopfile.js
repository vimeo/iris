/* eslint-env node*/

module.exports = (plop) => {

    // We declare a new generator
    plop.setGenerator('New Component Folder', {

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
                name: 'type',
                message: 'What type of component will this be?',
                choices: [
                    { name: 'Stateless Functional Component (preferred)', value: 'stateless' },
                    { name: 'Stateful Class Component (are you sure?)', value: 'stateful' },
                ],
            },

        ],

    // List of actions to take.
    // Here we "add" new files from our templates.
        actions(data) {
            const actions = [
                {
                    type: 'add',
                    path: 'src/{{pascalCase name}}/{{pascalCase name}}-Docs.jsx',
                    templateFile: 'templates/plop-componentTemplates/ComponentDocsJSX.js',
                },
                {
                    type: 'add',
                    path: 'src/{{pascalCase name}}/index.ts',
                    templateFile: 'templates/plop-componentTemplates/ComponentIndexTS.js',
                },
            ];

            if (data.type) {
                actions.push({
                    type: 'add',
                    path: 'src/{{pascalCase name}}/{{pascalCase name}}.tsx',
                    templateFile: `templates/plop-componentTemplates/${data.type}/ComponentTSX.js`,
                });

            }
            return actions;
        },
    });

    // We declare a new generator
    plop.setGenerator('New Component Part (SFC)', {

        // Succintly describes what generator does.
        description: 'Create an Styled SFC in an existing component file',

        // Get inputs from the user.

        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is this Component Part\'s name? (PascalCasePlease, no spaces)',
                validate(value) {
                    if ((/.+/).test(value)) {
                        return true;
                    }
                    return 'name is required';
                },
            },
            {
                type: 'input',
                name: 'targetFolder',
                message: 'What is the Component folder name where this should get created? (e.g. InputCheckbox)',
                validate(value) {
                    if ((/.+/).test(value)) {
                        return true;
                    }
                    return 'folder name is required';
                },
            },


        ],

        // List of actions to take.
        // Here we "add" new files from our templates.
        actions(data) {
            const actions = [
                {
                    type: 'add',
                    path: 'src/{{pascalCase targetFolder}}/{{pascalCase name}}.tsx',
                    templateFile: 'templates/plop-componentTemplates/stateless/ComponentTSX.js',
                },
            ];

            return actions;
        },
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
