module.exports = ( plop ) => {

  // We declare a new generator called "module"
  plop.setGenerator( "Iris Component", {

    // Succintly describes what generator does.
    description: "Create a Component folder structure",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your Component name (PascalCasePlease)?",
        validate: function (value) {
					if ((/.+/).test(value)) { return true; }
					return 'name is required';
				}
      },

    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "templates/plop-componentTemplates/ComponentJSX.js"
      },
      {
        type: "add",
        path: "docs/components/{{pascalCase name}}/{{pascalCase name}}-Docs.jsx",
        templateFile: "templates/plop-componentTemplates/ComponentDocsJSX.js"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "templates/plop-componentTemplates/ComponentSCSS.js"
      },
    ]

  } );

};
