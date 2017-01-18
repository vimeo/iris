import * as React from 'react';
import Button from './Button'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function ButtonDocs() {

	return (
		<div>
			<div data-code>
				<Button>Press Me</Button>
			</div>

			<ExampleSource>
				{`
				<Button>Press Me</Button>
				`}
			</ExampleSource>
		</div>

	);
};
