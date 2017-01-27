import * as React from 'react';
import Block from './Block'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function RowDocs() {

	return (
		<div>
			<div data-code>
				<Block />
			</div>

			<ExampleSource>
				{`
				<Block />
				`}
			</ExampleSource>
		</div>

	);
};
