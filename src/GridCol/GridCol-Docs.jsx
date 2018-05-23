import React from 'react';
import { GridCol } from '../index';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const GridColDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <div data-code>
                <GridCol />
            </div>

            <ExampleSource>
                {`
				<GridCol />
				`}
            </ExampleSource>
        </div>
    );
};

export default GridColDocs;
