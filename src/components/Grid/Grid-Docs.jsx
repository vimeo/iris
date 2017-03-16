import * as React from 'react';
import Grid from '../../../src/components/Grid/Grid.jsx';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class GridDocs extends React.Component {
    render() {
        return (
			<div className="Pattern__docs">
				<div data-code>
					<Grid></Grid>
				</div>

				<ExampleSource>
					{`
						<Grid></Grid>
					`}
				</ExampleSource>
			</div>

        );
    }
}

export default GridDocs;
