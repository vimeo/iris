import * as React from 'react';
import Badge from '../../../src/components/Badge/Badge';
import ExampleSource from '../../../node_modules/vimeo-styleguide/components/layouts/styles/ExampleSource';

export default function BadgeDocs() {

	return (
		<div>
			<p>Badges are used to add a tag to a username</p>
  				<div data-code>
	  				<Badge>Default Badge</Badge>
						<Badge type="alum">Alum</Badge>
						<Badge type="beta" title="foo">Beta</Badge>
  				</div>
					<ExampleSource>
						{`
							<Badge>Default Badge</Badge>
							<Badge type="alum">Alum</Badge>
							<Badge type="beta" title="foo">Beta</Badge>
						`}
					</ExampleSource>
		</div>
	);
};
