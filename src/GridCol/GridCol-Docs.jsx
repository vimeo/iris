import React from 'react';
import { GridCol } from '../index';
import ExampleSource from '../../docs/layout/ExampleSource';


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
