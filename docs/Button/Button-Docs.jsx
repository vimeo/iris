import * as React from 'react';
import Button from '../../../src/components/Button/Button';
import ExampleSource from '../../components/layouts/styles/ExampleSource';

export default function ButtonDocs() {
	return (
		<div>
			<h3>Regular Buttons</h3>
  				<div data-code>
  					<Button>Primary</Button>
  					<Button type="secondary">Secondary</Button>
  					<Button type="positive">Positive</Button>
            <Button type="negative">Negative</Button>
  				</div>

					<ExampleSource>
						{`
							<Button>Primary</Button>
							<Button type="secondary">Secondary</Button>
							<Button type="positive">Positive</Button>
							<Button type="negative">Negative</Button>
						`}
					</ExampleSource>
					<h3>Small Buttons</h3>
          <div data-code>
  					<Button size="small">Primary Small</Button>
  					<Button type="secondary" size="small">Secondary Small</Button>
  				</div>

					<ExampleSource>
						{`
							<Button size="small">Primary Small</Button>
							<Button type="secondary" size="small">Secondary Small</Button
						`}
					</ExampleSource>

				</div>
	);
};
