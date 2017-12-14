import React from 'react';
import FeatureTourPanel from './FeatureTourPanel';
import FeatureTourDot from '../FeatureTourDot';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3, Header5 } from '../Type';

class FeatureTourPanelDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>The Feature Tour Panel is used to highlight interactions for the user.</ParagraphMd>
                <div data-code>
                    <FeatureTourPanel
                        headerText="Header Text"
                        beaconMode="active"
                        beaconText="click to learn more"
                        dismissButtonLabel="Close"
                        primaryButtonProps={{
                            children: 'Okay',
                        }}
                    >
                        This is the body text. Vimeo was born in 2004, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                    </FeatureTourPanel>
                    <Header5>Delayed Beacon</Header5>
                    <FeatureTourPanel
                        headerText="Header Text"
                        beaconDelayIndex={1}
                        beaconMode="active"
                        beaconText="click to learn more"
                        dismissButtonLabel="Close"
                        primaryButtonProps={{
                            children: 'Okay',
                        }}
                    >
                        This is the body text. Vimeo was born in 2004, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                    </FeatureTourPanel>
                </div>

                <ExampleSource>
                    {`
                        <FeatureTourPanel />
                        `}
                    </ExampleSource>

                    <Header3>Beacon Modes</Header3>
                    <Header5>Active</Header5>
                    <FeatureTourDot
                        beaconText="this is active"
                        mode="active"
                    />
                    <Header5>Inactive</Header5>
                    <FeatureTourDot
                        beaconText="this is inactive"
                        mode="inactive"
                    />
                    <Header5>Open</Header5>
                    <FeatureTourDot
                        beaconText="this is open"
                        mode="open"
                    />
                </div>
        );
    }
}

export default FeatureTourPanelDocs;
