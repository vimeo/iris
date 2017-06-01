import * as React from 'react';
import { Grid } from './Grid.jsx';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const GridDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <div data-code>
                <Grid/>
            </div>

            <ExampleSource>
                {`
<Grid></Grid>
                `}
            </ExampleSource>
        </div>
    );
};

export default GridDocs;
