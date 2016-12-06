import * as React from 'react';
import * as Iris from '../../../index.jsx'
import ExampleSource from 'vimeo-styleguide/components/styleListings/ExampleSource';

export default function {{pascalCase name}}Docs() {

	return (
		<div>
			<div data-code>
				<Iris.{{pascalCase name}} />
			</div>

			<ExampleSource>
				{`
				<Iris.{{pascalCase name}} />
				`}
			</ExampleSource>
		</div>

	);
};
