import React, { useState } from 'react';
import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';

import { Button as B } from './Button';
import { Header as H } from '../../../typography';
import {
  config,
  formats,
  statuses,
  variants,
  sizes,
} from './Button.config';

import {
  DownloadArrow,
  Plus,
  ArrowRight,
  ChevronDown,
} from '../../../icons';

export default config;

const Button = styled(B)`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

export function Common() {
  return <Button>Button</Button>;
}

export function Disabled() {
  return <Button disabled>Button</Button>;
}

export function Pill() {
  return <Button pill>Button</Button>;
}

export function Index() {
  return (
    <Flex>
      {formats.map((format, i) => (
        <div>
          <H size="4"> format: {format} </H>
          {variants.map((variant, j) => (
            <Button
              key={`${i}-${j}`}
              variant={variant}
              format={format}
              children={variant}
            />
          ))}
        </div>
      ))}
      {statuses.map((status, i) => (
        <div>
          <H size="4"> status: {status} </H>
          {variants.map((variant, j) => (
            <Button
              key={`${i}-${j}`}
              variant={variant}
              status={status}
              children={variant}
            />
          ))}
        </div>
      ))}
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

export function Format() {
  return formats.map((format, i) => (
    <Button key={i} format={format} children={format} />
  ));
}

export function Variant() {
  return variants.map((variant, i) => (
    <Button key={i} variant={variant} children={variant} />
  ));
}

export function Status() {
  return statuses.map((status, i) => (
    <Button key={i} status={status} children={status} />
  ));
}

export function Size() {
  return (
    <>
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
    </>
  );
}

export function Icon() {
  return <Button icon={<DownloadArrow />} />;
}

export function IconPill() {
  return <Button icon={<Plus />} pill />;
}
IconPill.story = { name: 'Icon (Pill)' };

export function IconPosition() {
  return (
    <>
      <Button
        icon={<ChevronDown />}
        iconPosition="left"
        size={select('Size', sizes, 'md')}
        style={{ maxWidth: '10rem' }}
      >
        {select(
          'Text length',
          ['Short text', 'Long long text goes here'],
          'Short text'
        )}
      </Button>
      <Button
        icon={<ChevronDown />}
        iconPosition="right"
        size={select('Size', sizes, 'md')}
        style={{ maxWidth: '10rem' }}
      >
        {select(
          'Text length',
          ['Short text', 'Long long text goes here'],
          'Short text'
        )}
      </Button>
      <Button
        icon={<ChevronDown />}
        iconPosition="featured"
        size={select('Size', sizes, 'md')}
        style={{ maxWidth: '10rem' }}
      >
        {select(
          'Text length',
          ['Short text', 'Long long text goes here'],
          'Short text'
        )}
      </Button>
      <Button
        icon={<ChevronDown />}
        iconPosition="action"
        size={select('Size', sizes, 'md')}
        style={{ maxWidth: '10rem' }}
      >
        {select(
          'Text length',
          ['Short text', 'Long long text goes here'],
          'Short text'
        )}
      </Button>
    </>
  );
}

export function Floating() {
  return <Button floating>Floating Button</Button>;
}

export function FloatingPill() {
  return (
    <Button
      format="secondary"
      icon={<ArrowRight />}
      iconPosition="right"
      floating
      pill
    >
      Floating Button
    </Button>
  );
}
FloatingPill.story = { name: 'Floating (Pill)' };

export function Fluid() {
  return <Button fluid>Fluid Button</Button>;
}

export function FluidVaried() {
  return (
    <>
      <Button
        fluid={{ min: 0, max: 500 }}
        children="{ min: 0, max: 500 }"
      />
      <Button
        fluid={{ min: 250, max: 750 }}
        children="{ min: 250, max: 750 }"
      />
      <Button
        fluid={{ min: 500, max: 1000 }}
        children="{ min: 500, max: 1000 }"
      />
      <Button
        fluid={{ min: 750, max: 1250 }}
        children="{ min: 750, max: 1250 }"
      />
      <Button
        fluid={{ min: 1000, max: 1500 }}
        children="{ min: 1000, max: 1500 }"
      />
      <Button
        fluid={{ min: 1250, max: 1750 }}
        children="{ min: 1250, max: 1750 }"
      />
      <Button
        fluid={{ min: 1500, max: 2000 }}
        children="{ min: 1500, max: 2000 }"
      />
    </>
  );
}
FluidVaried.story = { name: 'Fluid (Queried)' };

export function TextOverflow() {
  return (
    <Button style={{ maxWidth: '7rem' }}>
      lorem ipsum dolor sit
    </Button>
  );
}

export const Loading = () => <LoadingStory />;
function LoadingStory() {
  const [loading, setLoading] = useState(false);
  const onClick = () => setLoading((loading) => !loading);

  return (
    <Button size="lg" loading={!loading} onClick={onClick}>
      Click Me
    </Button>
  );
}

// useIrisError example
// export function Error() {
//   return (
//     <>
//       <Button format="badFormatName" debug>
//         hey
//       </Button>
//       <Button format="primary">hey</Button>
//       <Button format="badFormatNameTwo" debug>
//         hey
//       </Button>
//     </>
//   );
// }
