import React from 'react';
import { GridBlock } from '../index';
import ExampleSource from '../../docs/layout/ExampleSource';


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
