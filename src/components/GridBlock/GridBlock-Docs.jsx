import * as React from 'react';
import GridBlock from './GridBlock';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const BlockDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <div data-code>
                <GridBlock />
            </div>

            <ExampleSource>
                {`
					<GridBlock />
					`}
            </ExampleSource>
        </div>
    );
};

export default BlockDocs;
