import React from 'react';
import FeatureModal from './FeatureModal';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {ParagraphMd} from '../Type';

class FeatureModalDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <FeatureModal />
                </div>

                <ExampleSource>
                    {`
                        <FeatureModal />
                        `}
                    </ExampleSource>
                </div>
        );
    };
};

export default FeatureModalDocs;
