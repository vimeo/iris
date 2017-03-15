import * as React from 'react';
import { GridBlock, Grid } from '../../../src/components/Grid/Grid.jsx';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class GridDocs extends React.Component {
    render() {
        return (
			<div>
				<div data-code>
					<Grid>
						<GridBlock mdSpan="3" smSpan="3" />
					</Grid>
				</div>

				<ExampleSource>
					{`
						<Grid>
							<GridBlock mdSpan="3" smSpan="3"></GridBlock>
						</Grid>
					`}
				</ExampleSource>
			</div>

        );
    }
}

export default GridDocs;
