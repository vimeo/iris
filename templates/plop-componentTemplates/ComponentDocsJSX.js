import * as React from 'react';
import {{pascalCase name}} from './{{pascalCase name}}'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function {{pascalCase name}}Docs() {

	return (
		<div>
			<div data-code>
				<{{pascalCase name}} />
			</div>

			<ExampleSource>
				{`
				<{{pascalCase name}} />
				`}
			</ExampleSource>
		</div>

	);
};
