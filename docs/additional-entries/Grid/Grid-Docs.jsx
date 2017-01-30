import * as React from 'react';
import Grid from '../../../src/components/Grid/Grid.jsx';
import Block from '../../../src/components/Block/Block.jsx';

export default function GridDocs() {

	return (
		<div>
			<h3>Overview</h3>
			<p>The Iris Grid is a layout component composed of 24 column set up. The component houses to child components: Blocks and Columns.</p>
			<div data-code>
				<Grid>
					<Block lgSpan={24} mdSpan="4" smSpan="1" align="left" className="golden" rail={true}></Block>
				</Grid>
			</div>
		</div>

	);
};
