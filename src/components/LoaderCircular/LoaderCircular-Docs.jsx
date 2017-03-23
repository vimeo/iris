import React from 'react';
import LoaderCircular from './LoaderCircular';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const LoaderCircularDocs = (props) => {
    return (
        <div>
            <div data-code>
                <LoaderCircular />
            </div>

            <ExampleSource>
                {`
                    <LoaderCircular />
                    `}
                </ExampleSource>
            </div>
    );
};

export default LoaderCircularDocs;
