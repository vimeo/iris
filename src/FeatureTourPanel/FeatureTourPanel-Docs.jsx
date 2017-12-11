import React from 'react';
import FeatureTourPanel from './FeatureTourPanel';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {ParagraphMd} from '../Type';

class FeatureTourPanelDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <FeatureTourPanel />
                </div>

                <ExampleSource>
                    {`
                        <FeatureTourPanel />
                        `}
                    </ExampleSource>
                </div>
        );
    };
};

export default FeatureTourPanelDocs;
