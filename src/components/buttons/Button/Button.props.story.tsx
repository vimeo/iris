import React, { useState } from 'react';
import styled from 'styled-components';

import { Button as B } from './Button';
import {
  formats,
  statuses,
  variants,
  sizes,
  iconPositions,
} from './Button.config';

import { DownloadArrow, Plus, ChevronDown } from '../../../icons';

export default {
  title: 'Components/Buttons/Button/Props',
};

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

export function Element() {
  return (
    <Button
      element="a"
      href="#"
      css={`
        width: 12rem;
      `}
    >
      Button as link
    </Button>
  );
}

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
  return sizes.map((size, i) => (
    <Button size={size} key={i}>
      Button
    </Button>
  ));
}

export function Icon() {
  return <Button icon={<DownloadArrow />} />;
}

export function IconPill() {
  return <Button icon={<Plus />} pill />;
}
IconPill.storyName = 'Icon (Pill)';

export function IconPosition() {
  return iconPositions.map((position, i) => (
    <Button icon={<ChevronDown />} iconPosition={position} key={i}>
      iconPosition {position}
    </Button>
  ));
}

export function Floating() {
  return <Button floating>Floating Button</Button>;
}

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
FluidVaried.storyName = 'Fluid (Queried)';

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

export const Overflow = () => {
  return <Button overflow>Button</Button>;
};
