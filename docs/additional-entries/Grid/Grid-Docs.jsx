import * as React from 'react';
import Grid from '../../../src/components/Grid/Grid.jsx';
import Block from '../../../src/components/Block/Block.jsx';
import Col from '../../../src/components/Col/Col.jsx';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

export default function GridDocs() {

	return (
		<div>
			<h3>Overview</h3>
			<p>The Iris Grid is a layout component composed of 24 column set up. The component houses to child components: Blocks and Columns.</p>
			<div data-code>
				<Grid>

						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>
						<Col span={1}></Col>

				</Grid>
			</div>
			<ExampleSource>
				{`
					<Grid>
						<Col span={8}></Col>
						<Col span={16} nested>

								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
								<Col span={1}></Col>
							
						</Col>
					</Grid>
				`}
			</ExampleSource>
		</div>

	);
};
