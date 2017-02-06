import * as React from 'react';
import {Block, Col, Grid} from  '../../../src/components/Grid/Grid.jsx';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function GridDocs() {

	return (
		<div>
			<h3>Overview</h3>
			<p>The Iris Grid is a layout component composed of 24 column set up. The component houses to child components: Blocks and Columns.</p>
			<div data-code>
				<Grid>
					<Block>
						<Col span="25"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
						<Col span="1"></Col>
					</Block>
				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
						<Block>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
							<Col span="1"></Col>
						</Block>
					</Grid>
				`}
			</ExampleSource>
		</div>

	);
};
