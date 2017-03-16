/* eslint-env node*/

module.exports = (plop) => {

  // We declare a new generator
    plop.setGenerator('Iris Component', {

    // Succintly describes what generator does.
        description: 'Create a Component folder structure',

    // Get inputs from the user.

        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your Component name (PascalCasePlease)?',
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
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'templates/plop-componentTemplates/ComponentJSX.js',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}-Docs.jsx',
                templateFile: 'templates/plop-componentTemplates/ComponentDocsJSX.js',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
                templateFile: 'templates/plop-componentTemplates/ComponentSCSS.js',
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
                path: 'doc-assets/additional-entries/{{pascalCase name}}/{{pascalCase name}}-Docs.jsx',
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
                path: 'doc-assets/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'templates/plop-componentTemplates/StandAlonePageJSX.js',
            },
        ],

    });

};
