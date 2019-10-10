import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import { PositionProperty } from 'csstype';

import { FeatureTourPanel } from './FeatureTourPanel';
import { FeatureTourPanelButton } from '../FeatureTourPanelButton/FeatureTourPanelButton';
import { Button } from '../../../components/buttons/Button/Button';

import { LinkText } from '../../../typography';
import { Header3, ParagraphMd } from '../../../legacy';
import {
  RumSwizzle,
  PalePink,
  Foam,
  WarningYellow,
} from '../../../legacy';

storiesOf('components|informational/Feature Tour Panel/', module)
  .add('default', () => (
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
  ))
  .add('colored', () => (
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
          <FeatureTourPanelButton format="secondaryOutline">
            Okay
          </FeatureTourPanelButton>
        }
        attachment="right"
        headerText="Right Attachment"
        beaconDelayIndex={1}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 1 of 3"
        style={dotStyles(0)}
        color={color('(1) color', RumSwizzle, 'tour-colors')}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="primaryDark"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={
          <FeatureTourPanelButton format="secondaryOutline">
            Okay
          </FeatureTourPanelButton>
        }
        attachment="bottom"
        headerText="Bottom Attachment"
        beaconDelayIndex={2}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 2 of 3"
        style={dotStyles(4)}
        color={color('(2) color', Foam, 'tour-colors')}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="primaryDark"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={
          <FeatureTourPanelButton format="secondaryOutline">
            Okay
          </FeatureTourPanelButton>
        }
        attachment="left"
        headerText="Left Attachment"
        beaconDelayIndex={3}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 3 of 3"
        style={dotStyles(8)}
        color={color('(3) color', WarningYellow, 'tour-colors')}
      >
        This is the body text. Vimeo was born in{' '}
        <LinkText
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="primaryDark"
        >
          2004
        </LinkText>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
    </div>
  ))
  .add('fancy', () => (
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
        attachment="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(1) color', RumSwizzle, 'tour-colors')}
        size="xl"
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header3>Showcases: new and improved albums</Header3>
        <ParagraphMd>
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </ParagraphMd>
        <Button
          format="alternativeOutline"
          style={{ marginRight: '1rem' }}
        >
          Learn More
        </Button>
        <Button format="alternative">Take the tour</Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attachment="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(2) color', PalePink, 'tour-colors')}
        size="xl"
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header3>Showcases: new and improved albums</Header3>
        <ParagraphMd>
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </ParagraphMd>
        <Button
          format="alternativeOutline"
          style={{ marginRight: '1rem' }}
        >
          Learn More
        </Button>
        <Button format="alternative">Take the tour</Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attachment="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(3) color', '#53D4B0', 'tour-colors')}
        size="xl"
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header3>Showcases: new and improved albums</Header3>
        <ParagraphMd>
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </ParagraphMd>
        <Button
          format="alternativeOutline"
          style={{ marginRight: '1rem' }}
        >
          Learn More
        </Button>
        <Button format="alternative">Take the tour</Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attachment="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(4) color', Foam, 'tour-colors')}
        size="xl"
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header3>Showcases: new and improved albums</Header3>
        <ParagraphMd>
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </ParagraphMd>
        <Button
          format="alternativeOutline"
          style={{ marginRight: '1rem' }}
        >
          Learn More
        </Button>
        <Button format="alternative">Take the tour</Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attachment="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(5) color', WarningYellow, 'tour-colors')}
        size="xl"
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header3>Showcases: new and improved albums</Header3>
        <ParagraphMd>
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </ParagraphMd>
        <Button
          format="alternativeOutline"
          style={{ marginRight: '1rem' }}
        >
          Learn More
        </Button>
        <Button format="alternative">Take the tour</Button>
      </FeatureTourPanel>
    </div>
  ));

const dotStyles = pos => ({
  position: 'absolute' as PositionProperty,
  top: `${pos}rem`,
  left: `${pos}rem`,
});
