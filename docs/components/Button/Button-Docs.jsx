import * as React from 'react';
import Button from '../../../src/components/Button/Button';

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

				</div>
	);
};
