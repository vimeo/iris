import React from 'react';
import { storiesOf } from '@storybook/react';
import { FeatureTourPanel } from './FeatureTourPanel';
import { FeatureTourPanelButton } from '../FeatureTourPanelButton/FeatureTourPanelButton';
import { LinkText } from '../LinkText/LinkText';
import { PositionProperty } from 'csstype';

storiesOf('components|Feature Tour Panel', module).add(
  'default',
  () => (
    <div
      style={{
        position: 'relative',
        width: '30rem',
        height: '25rem',
        margin: '10rem 15rem',
        border: '1px solid #CCC',
        borderRadius: '0.05rem',
      }}
    >
      <FeatureTourPanel
        actionArea={
          <FeatureTourPanelButton>Okay</FeatureTourPanelButton>
        }
        attachment="right"
        headerText="Right Attachment"
        beaconDelayIndex={1}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 1 of 4"
        style={dotStyles(0)}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="light"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={
          <FeatureTourPanelButton>Okay</FeatureTourPanelButton>
        }
        attachment="bottom"
        headerText="Bottom Attachment"
        beaconDelayIndex={2}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 2 of 4"
        style={dotStyles(4)}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="light"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={
          <FeatureTourPanelButton>Okay</FeatureTourPanelButton>
        }
        attachment="left"
        headerText="Left Attachment"
        beaconDelayIndex={3}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 3 of 4"
        style={dotStyles(8)}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="light"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={
          <FeatureTourPanelButton>Okay</FeatureTourPanelButton>
        }
        attachment="top"
        headerText="Top Attachment"
        beaconDelayIndex={4}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        contextualInfo="Step 4 of 4"
        style={dotStyles(12)}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="light"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>

      <FeatureTourPanel
        actionArea={
          <FeatureTourPanelButton>Okay</FeatureTourPanelButton>
        }
        attachment="right"
        // shouldHideOnClose
        headerText="Right Attachment With Long Title For Multi-line"
        beaconDelayIndex={5}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        style={dotStyles(16)}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="light"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
    </div>
  ),
);

const dotStyles = pos => ({
  position: 'absolute' as PositionProperty,
  top: `${pos}rem`,
  left: `${pos}rem`,
});
