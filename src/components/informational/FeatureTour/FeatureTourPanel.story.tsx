import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
import { PositionProperty } from 'csstype';

import { FeatureTourPanel } from './FeatureTourPanel';

import { Button } from '../../index';
import { Link } from '../../../typography';
import { Header, Paragraph } from '../../../typography';
import { red, yellow, green } from '../../../color';

const buttonProps = {
  format: 'basic',
  variant: 'outline',
  size: 'md',
  autoWidth: 'xs',
  style: { marginTop: '1rem' },
} as const;

storiesOf('Components|informational/Feature Tour Panel', module)
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
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="right"
        headerText="Right Attachment"
        beaconDelayIndex={1}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 1 of 4"
        style={dotStyles(0)}
      >
        This is the body text. Vimeo was born in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
        >
          2004
        </Link>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="bottom"
        headerText="Bottom Attachment"
        beaconDelayIndex={2}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 2 of 4"
        style={dotStyles(4)}
      >
        This is the body text. Vimeo was born in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
        >
          2004
        </Link>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="left"
        headerText="Left Attachment"
        beaconDelayIndex={3}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 3 of 4"
        style={dotStyles(8)}
      >
        This is the body text. Vimeo was born in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
        >
          2004
        </Link>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="top"
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
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
        >
          2004
        </Link>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>

      <FeatureTourPanel
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="right"
        // shouldHideOnClose
        headerText="Right Attachment With Long Title For Multi-line"
        beaconDelayIndex={5}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        style={dotStyles(16)}
      >
        This is the body text. Vimeo was born in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
        >
          2004
        </Link>
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
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="right"
        headerText="Right Attachment"
        beaconDelayIndex={1}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 1 of 3"
        style={dotStyles(0)}
        color={color('(1) color', green(100), 'tour-colors')}
        onClose={() => console.log('close')}
        onOpen={() => console.log('open')}
      >
        This is the body text. Vimeo was born in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
        >
          2004
        </Link>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="bottom"
        headerText="Bottom Attachment"
        beaconDelayIndex={2}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 2 of 3"
        style={dotStyles(4)}
        color={color('(2) color', green(50), 'tour-colors')}
      >
        This is the body text. Vimeo was born in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
        >
          2004
        </Link>
        , created by a group of filmmakers who wanted an easy and
        beautiful way to share videos with their friends.
      </FeatureTourPanel>
      <FeatureTourPanel
        actionArea={<Button {...buttonProps}>Okay</Button>}
        attach="left"
        headerText="Left Attachment"
        beaconDelayIndex={3}
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        contextualInfo="Step 3 of 3"
        style={dotStyles(8)}
        color={color('(3) color', yellow(500), 'tour-colors')}
      >
        This is the body text. Vimeo was born in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/2004"
          target="_blank"
          format="primaryDark"
        >
          2004
        </Link>
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
        attach="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(1) color', green(100), 'tour-colors')}
        size="xl"
        beaconDelayIndex={1}
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header size="3">Showcases: new and improved albums</Header>
        <Paragraph size="2">
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </Paragraph>
        <Button
          format="alternative"
          variant="outline"
          style={{ marginRight: '1rem', display: 'inline-block' }}
        >
          Learn More
        </Button>
        <Button
          format="alternative"
          style={{ display: 'inline-block' }}
        >
          Take the tour
        </Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attach="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(2) color', red(50), 'tour-colors')}
        size="xl"
        beaconDelayIndex={2}
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header size="3">Showcases: new and improved albums</Header>
        <Paragraph size="2">
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </Paragraph>
        <Button
          format="alternative"
          variant="outline"
          style={{ marginRight: '1rem', display: 'inline-block' }}
        >
          Learn More
        </Button>
        <Button
          format="alternative"
          style={{ display: 'inline-block' }}
        >
          Take the tour
        </Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attach="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(3) color', '#53D4B0', 'tour-colors')}
        size="xl"
        beaconDelayIndex={3}
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header size="3">Showcases: new and improved albums</Header>
        <Paragraph size="2">
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </Paragraph>
        <Button
          format="alternative"
          variant="outline"
          style={{ marginRight: '1rem', display: 'inline-block' }}
        >
          Learn More
        </Button>
        <Button
          format="alternative"
          style={{ display: 'inline-block' }}
        >
          Take the tour
        </Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attach="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(4) color', green(50), 'tour-colors')}
        size="xl"
        beaconDelayIndex={4}
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header size="3">Showcases: new and improved albums</Header>
        <Paragraph size="2">
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </Paragraph>
        <Button
          format="alternative"
          variant="outline"
          style={{ marginRight: '1rem', display: 'inline-block' }}
        >
          Learn More
        </Button>
        <Button
          format="alternative"
          style={{ display: 'inline-block' }}
        >
          Take the tour
        </Button>
      </FeatureTourPanel>
      <FeatureTourPanel
        attach="right"
        beaconA11yText="click to learn more"
        dismissButtonA11yLabel="Close"
        dotZIndex={100}
        shouldRefocusTriggerOnClose={false}
        color={color('(5) color', yellow(500), 'tour-colors')}
        size="xl"
        beaconDelayIndex={5}
      >
        <img src="http://placekitten.com/480/230" alt="" />
        <Header size="3">Showcases: new and improved albums</Header>
        <Paragraph size="2">
          Showcase videos, embed playlists, make custom porfolio
          sites, and create channels for TV apps.
        </Paragraph>
        <Button
          format="alternative"
          variant="outline"
          style={{ marginRight: '1rem', display: 'inline-block' }}
        >
          Learn More
        </Button>
        <Button
          format="alternative"
          style={{ display: 'inline-block' }}
        >
          Take the tour
        </Button>
      </FeatureTourPanel>
    </div>
  ));

const dotStyles = pos => ({
  position: 'absolute' as PositionProperty,
  top: `${pos}rem`,
  left: `${pos}rem`,
});
