import React from 'react';
import FeatureTourPanel from './FeatureTourPanel';
import FeatureTourDot from '../FeatureTourDot';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3, Header5 } from '../Type';

import LinkText from '../LinkText';
import NotificationNeutral from '../NotificationNeutral';
import List from '../List';
import ListItem from '../ListItem';
import FeatureTourPanelButton from '../FeatureTourPanelButton';
import styles from './FeatureTourPanel-Docs.scss';

class FeatureTourPanelDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>The Feature Tour Panel is used to highlight interactions for the user.</ParagraphMd>
                <div data-code>
                    <div className={styles.dotDemoWrapper}>
                        <FeatureTourPanel
                            actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
                            attachment="right"
                            headerText="Right Attachment"
                            beaconDelayIndex={1}
                            beaconA11yText="click to learn more"
                            dismissButtonA11yLabel="Close"
                            wrapperClass={styles.dotOne}
                        >
                            This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                        </FeatureTourPanel>
                        <FeatureTourPanel
                            actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
                            attachment="bottom"
                            headerText="Bottom Attachment"
                            beaconDelayIndex={2}
                            beaconA11yText="click to learn more"
                            dismissButtonA11yLabel="Close"
                            wrapperClass={styles.dotTwo}
                        >
                            This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                        </FeatureTourPanel>
                        <FeatureTourPanel
                        actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
                        attachment="left"
                        headerText="Left Attachment"
                        beaconDelayIndex={3}
                        beaconA11yText="click to learn more"
                        dismissButtonA11yLabel="Close"
                        wrapperClass={styles.dotThree}
                    >
                        This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                    </FeatureTourPanel>
                    <FeatureTourPanel
                        actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
                        attachment="top"
                        headerText="Top Attachment"
                        beaconDelayIndex={4}
                        beaconA11yText="click to learn more"
                        dismissButtonA11yLabel="Close"
                        shouldRefocusTriggerOnClose={false}
                        wrapperClass={styles.dotFour}
                    >
                        This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                    </FeatureTourPanel>

                    <FeatureTourPanel
                        actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
                        attachment="right"
                        shouldHideOnClose
                        headerText="Right Attachment"
                        beaconDelayIndex={5}
                        beaconA11yText="click to learn more"
                        dismissButtonA11yLabel="Close"
                        wrapperClass={styles.dotFive}
                    >
                        This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
                    </FeatureTourPanel>
                    </div>
                    <ParagraphMd>The body text should be passed as the child of the component. No formatting is necessary for this text as it is wrapped in a div styled with the "ParagraphMd" style with the "light" format.</ParagraphMd>
                    <NotificationNeutral>
                        <List>
                            <ListItem>If there is a link in the text use <code>LinkText</code> with <code>format="light"</code>
                            </ListItem>
                            <ListItem>If there is a button use the <code>FeatureTourPanelButton</code> component passed to the <code>actionArea</code> prop.
                            </ListItem>
                        </List>
                    </NotificationNeutral>
                    <ParagraphMd>The dots should be positioned using a class that is passed to the <code>wrapperClass</code> prop. They will likely need to be absolutely positioned with a high z-index.</ParagraphMd>
                    <Header3>Prop Notes</Header3>
                    <List>
                        <ListItem><code>actionArea</code> should receive a <code>FeatureTourPanelButton</code> component with the desired props for the CTA. This component has can take any props that the Button component can take but it enforces <code>format</code>, <code>size</code>, and <code>autoWidth</code>.</ListItem>
                        <ListItem><code>attachment</code> determines in what direction the panel will fly out by default (it will repositon if it detects a collision with the viewport)</ListItem>
                        <ListItem><code>beaconDelayIndex</code> should be used to sequence the pulses from the beacon. start with 0 add 1 to each additional beacon.</ListItem>
                        <ListItem><code>beaconA11yText</code> is a required text string that should describe what clicking the beacon does (e.g. "Learn more about folders". This is used to describe the action to screen readers.</ListItem>
                        <ListItem><code>dismissButtonA11yLabel</code> is a required text string that should describe what clicking the dismiss button does (e.g. "Close"). This is used to describe the action to screen readers.</ListItem>
                        <ListItem><code>headerText</code> is a string that will be the header of the feature tour panel that opens.</ListItem>
                        <ListItem><code>shouldHideOnClose</code> hides the dot when the menu closes.</ListItem>
                        <ListItem><code>shouldRefocusTriggerOnClose</code> prevents the dot from refocusing when the menu closes. Use this if multiple dots can be open at the same time. Note this gets forced to false if <code>shouldHideOnClose</code></ListItem>
                        <ListItem><code>isOpen</code> opens the Feature Panel</ListItem>
                        <ListItem><code>dismissButtonProps</code> take an object of properties to be passed through to the formatted dismiss button.</ListItem>
                        <ListItem><code>wrapperClass</code> shoudl be used to pass a class to the component for positioning the beacon.</ListItem>
                    </List>
                </div>

                <ExampleSource>
                    {`
<style>
.dotOne {
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
}

.dotTwo {
    position: absolute;
    z-index: 102;
    top: 4em;
    left: 4rem;
}

.dotThree {
    position: absolute;
    z-index: 103;
    top: 8rem;
    left: 8rem;
}

.dotFour {
    position: absolute;
    z-index: 104;
    top: 12rem;
    left: 12rem;
}

.dotFive {
    position: absolute;
    z-index: 105;
    top: 16rem;
    left: 16rem;
}
</style>

<FeatureTourPanel
    actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
    attachment="right"
    headerText="Right Attachment"
    beaconDelayIndex={1}
    beaconA11yText="click to learn more"
    dismissButtonA11yLabel="Close"
    wrapperClass={styles.dotOne}
>
    This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
</FeatureTourPanel>
<FeatureTourPanel
    actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
    attachment="bottom"
    headerText="Bottom Attachment"
    beaconDelayIndex={2}
    beaconA11yText="click to learn more"
    dismissButtonA11yLabel="Close"
    wrapperClass={styles.dotTwo}
>
    This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
</FeatureTourPanel>
<FeatureTourPanel
    actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
    attachment="left"
    headerText="Left Attachment"
    beaconDelayIndex={3}
    beaconA11yText="click to learn more"
    dismissButtonA11yLabel="Close"
    wrapperClass={styles.dotThree}
>
    This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
</FeatureTourPanel>
<FeatureTourPanel
    actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
    attachment="top"
    headerText="Top Attachment"
    beaconDelayIndex={4}
    beaconA11yText="click to learn more"
    dismissButtonA11yLabel="Close"
    shouldRefocusTriggerOnClose={false}
    wrapperClass={styles.dotFour}
>
    This is the body text. Vimeo was born in <LinkText href="https://en.wikipedia.org/wiki/2004" target="_blank" format="light">2004</LinkText>, created by a group of filmmakers who wanted an easy and beautiful way to share videos with their friends.
</FeatureTourPanel>

<FeatureTourPanel
    actionArea={<FeatureTourPanelButton>Okay</FeatureTourPanelButton>}
    attachment="right"
    shouldHideOnClose
    headerText="Right Attachment"
    beaconDelayIndex={5}
    beaconA11yText="click to learn more"
    dismissButtonA11yLabel="Close"
    wrapperClass={styles.dotFive}
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
                        beaconA11yText="click to learn more"
                    />
                    <Header5>Inactive</Header5>
                    <FeatureTourDot
                        beaconText="this is inactive"
                        mode="inactive"
                        beaconA11yText="click to learn more"
                    />
                    <Header5>Open</Header5>
                    <FeatureTourDot
                        beaconText="this is open"
                        mode="open"
                        beaconA11yText="click to learn more"
                    />
                </div>
        );
    }
}

export default FeatureTourPanelDocs;
