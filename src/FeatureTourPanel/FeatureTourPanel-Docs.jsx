import React from 'react';
import FeatureTourPanel from './FeatureTourPanel';
import FeatureTourDot from '../FeatureTourDot';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3, Header5 } from '../Type';
import LinkText from '../LinkText';
import NotificationNeutral from '../NotificationNeutral';
import { List, ListItem } from '../List';

class FeatureTourPanelDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>The Feature Tour Panel is used to highlight interactions for the user.</ParagraphMd>
                <div data-code>
                <Header5>beaconDelayIndex=1</Header5>
                    <FeatureTourPanel
                        headerText="Header Text"
                        beaconDelayIndex={1}
                        beaconText="click to learn more"
                        dismissButtonLabel="Close"
                        primaryButtonProps={{
                            children: 'Okay',
                        }}
                    >
                        This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                    </FeatureTourPanel>
                    <Header5>beaconDelayIndex=2</Header5>
                    <FeatureTourPanel
                        headerText="Header Text"
                        beaconDelayIndex={2}
                        beaconText="click to learn more"
                        dismissButtonLabel="Close"
                        primaryButtonProps={{
                            children: 'Okay',
                        }}
                    >
                        This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                    </FeatureTourPanel>
                    <ParagraphMd>The body text should be passed as the child of the component. No formatting is necessary for this text as it is wrapped in a div styled with the "ParagraphMd" style with the "light" format.</ParagraphMd>
                    <NotificationNeutral>
                        <ParagraphMd>If there is a link in the text use <code>LinkText</code> with <code>format="light"</code></ParagraphMd>
                    </NotificationNeutral>
                    <ParagraphMd>The dots should be positioned using a class that is passed to the <code>wrapperClass</code> prop. They will likely need to be absolutely positioned with a high z-index.</ParagraphMd>
                    <Header3>Prop Notes</Header3>
                    <List>
                        <ListItem><code>attachment</code> determines in what direction the panel will fly out by default (it will repositon if it detects a collision with the viewport)</ListItem>
                        <ListItem><code>beaconDelayIndex</code> should be used to sequence the pulses from the beacon. start with 0 add 1 to each additional beacon.</ListItem>
                        <ListItem><code>beaconText</code> is a required text string that should describe what clicking the beacon does (e.g. "Learn more about folders". This is used to describe the action to screen readers.</ListItem>
                        <ListItem><code>dismissButtonLabel</code> is a required text string that should describe what clicking the dismiss button does (e.g. "Close". This is used to describe the action to screen readers.</ListItem>
                        <ListItem><code>headerText</code> is a string that will be the header of the feature tour panel that opens.</ListItem>
                        <ListItem><code>primaryButtonProps</code> and <code>dismissButtonProps</code> take an object of properties to be passed to the formatted primary button and dismiss button respectively.</ListItem>
                        <ListItem><code>wrapperClass</code> shoudl be used to pass a class to the component for positioning the beacon.</ListItem>
                    </List>
                </div>

                <ExampleSource>
                    {`
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
    This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
</FeatureTourPanel>

<FeatureTourPanel
    headerText="Header Text"
    beaconDelayIndex={2}
    beaconMode="active"
    beaconText="click to learn more"
    dismissButtonLabel="Close"
    primaryButtonProps={{
        children: 'Okay',
    }}
>
    This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
</FeatureTourPanel>
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
