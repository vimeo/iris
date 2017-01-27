import * as React from 'react';
import Grid from './Grid'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function GridDocs() {

	return (
		<div>
			<div data-code>
				<Grid />
			</div>

			<ExampleSource>
				{`
				<Grid />
				`}
			</ExampleSource>
		</div>

	);
};
