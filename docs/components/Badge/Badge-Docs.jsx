import * as React from 'react';
import * as Iris from '../../../index.jsx'
import ExampleSource from 'vimeo-styleguide/components/styleListings/ExampleSource';

export default function BadgeDocs() {

	return (
		<div>
			<p>Badges are used to add a tag to a username</p>
  				<div data-code>
	  				<Iris.Badge>Default Badge</Iris.Badge>
						<Iris.Badge type="alum">Alum</Iris.Badge>
						<Iris.Badge type="beta" title="foo">Beta</Iris.Badge>
  				</div>

					<ExampleSource>
						{`
							<Iris.Badge>Default Badge</Iris.Badge>
							<Iris.Badge type="alum">Alum</Iris.Badge>
							<Iris.Badge type="beta" title="foo">Beta</Iris.Badge>
						`}
					</ExampleSource>

		</div>
	);
};
