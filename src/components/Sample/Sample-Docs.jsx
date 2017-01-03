import * as React from 'react';
import Sample from './Sample'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function SampleDocs() {

	return (
		<div>
			<div data-code>
				<Sample />
			</div>

			<ExampleSource>
				{`
				<Sample />
				`}
			</ExampleSource>
		</div>

	);
};
