import * as React from 'react';
import Col from './Col'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function ColDocs() {

	return (
		<div>
			<div data-code>
				<Col />
			</div>

			<ExampleSource>
				{`
				<Col />
				`}
			</ExampleSource>
		</div>

	);
};
