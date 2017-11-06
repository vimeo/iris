import React from 'react';
import OverflowTruncationWrapper from './OverflowTruncationWrapper';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {ParagraphMd} from '../../../src/utility_components/Type/Type';

class OverflowTruncationWrapperDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <OverflowTruncationWrapper />
                </div>

                <ExampleSource>
                    {`
                        <OverflowTruncationWrapper />
                        `}
                    </ExampleSource>
                </div>
        );
    };
};

export default OverflowTruncationWrapperDocs;
