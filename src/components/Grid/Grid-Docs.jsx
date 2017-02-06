import * as React from 'react';
import Grid from './Grid'
import Block from '../Block/Block.jsx'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class GridDocs extends React.Component {
	render () {
		return (
			<div>
				<div data-code>
					<Grid>
						<Block mdSpan="3" smSpan="3"></Block>
					</Grid>
				</div>

				<ExampleSource>
					{`
						<Grid>
							<Block mdSpan="3" smSpan="3"></Block>
						</Grid>
					`}
				</ExampleSource>
			</div>

		);
	}
};

export default GridDocs;
