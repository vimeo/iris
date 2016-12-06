import * as React from 'react';
import * as Iris from '../../../index.jsx'
import ExampleSource from 'vimeo-styleguide/components/styleListings/ExampleSource';

export default function ButtonDocs() {
	return (
		<div>
			<h3>Regular Buttons</h3>
  				<div data-code>
  					<Iris.Button>Primary</Iris.Button>
  					<Iris.Button type="secondary">Secondary</Iris.Button>
  					<Iris.Button type="positive">Positive</Iris.Button>
            <Iris.Button type="negative">Negative</Iris.Button>
  				</div>

					<ExampleSource>
						{`
							<Iris.Button>Primary</Iris.Button>
							<Iris.Button type="secondary">Secondary</Iris.Button>
							<Iris.Button type="positive">Positive</Iris.Button>
							<Iris.Button type="negative">Negative</Iris.Button>
						`}
					</ExampleSource>
					<h3>Small Buttons</h3>
          <div data-code>
  					<Iris.Button size="small">Primary Small</Iris.Button>
  					<Iris.Button type="secondary" size="small">Secondary Small</Iris.Button>
  				</div>

					<ExampleSource>
						{`
							<Iris.Button size="small">Primary Small</Iris.Button>
							<Iris.Button type="secondary" size="small">Secondary Small</Iris.Button
						`}
					</ExampleSource>

				</div>
	);
};
