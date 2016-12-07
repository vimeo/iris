import * as React from 'react';
import {pascalCase name} from './{pascalCase name}'
import ExampleSource from 'vimeo-styleguide/components/styleListings/ExampleSource';

export default function {{pascalCase name}}Docs() {

	return (
		<div>
			<div data-code>
				<{{pascalCase name}} />
			</div>

			<ExampleSource>
				{`
				<Iris.{{pascalCase name}} />
				`}
			</ExampleSource>
		</div>

	);
};
