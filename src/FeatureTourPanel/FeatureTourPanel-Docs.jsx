import React from 'react';
import FeatureTourPanel from './FeatureTourPanel';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';

class FeatureTourPanelDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <FeatureTourPanel
                        headerText="Header Text"
                        beaconIsActive
                        beaconText="click to learn more"
                        bodyText="This is the body text. Vimeo was born in 2004, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends."
                        dismissButtonLabel="Close"
                        primaryButtonProps={{
                            children: 'Okay',
                        }}
                        secondaryButtonProps={{
                            children: 'Skip',
                        }}
                    />
                </div>

                <ExampleSource>
                    {`
                        <FeatureTourPanel />
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default FeatureTourPanelDocs;
