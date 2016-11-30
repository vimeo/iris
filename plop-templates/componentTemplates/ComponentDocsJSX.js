import * as React from 'react';
import {{pascalCase name}} from '../../../src/components/{{pascalCase name}}/{{pascalCase name}}';
import ExampleSource from '../../components/layouts/styles/ExampleSource';

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
