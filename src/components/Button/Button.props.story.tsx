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

import {
  ArrowLeft,
  ArrowRight,
  DownloadArrow,
  Plus,
  UploadCloud,
} from '../../icons';

export default {
  title: 'components/Button/props',
};

const Button = styled(B)`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

export function Disabled() {
  return <Button disabled>Button</Button>;
}
Disabled.storyName = 'disabled';

export function Element() {
  return (
    <Button
      element="a"
      href="#"
      css={`
        width: 12rem;
      `}>
      Button as link
    </Button>
  );
}
Element.storyName = 'element';

export function Format() {
  return formats.map((format, i) => (
    <Button key={i} format={format} children={format} />
  ));
}
Format.storyName = 'format';

export function Variant() {
  return variants.map((variant, i) => (
    <Button key={i} variant={variant} children={variant} />
  ));
}
Variant.storyName = 'variant';

export function Status() {
  return statuses.map((status, i) => (
    <Button key={i} status={status} children={status} />
  ));
}
Status.storyName = 'status';

export function Size() {
  const style = { display: 'inline-flex' };

  return sizes.map((size, i) => (
    <div key={i} style={{ display: 'flex' }}>
      <Button size={size} style={style}>
        Button
      </Button>
      <Button size={size} icon={<UploadCloud />} style={style}>
        Button
      </Button>
      <Button size={size} icon={<UploadCloud />} style={style} />
    </div>
  ));
}
Size.storyName = 'size';

export function Icon() {
  return <Button icon={<DownloadArrow />} />;
}
Icon.storyName = 'icon';

export function IconPill() {
  return <Button icon={<Plus />} pill />;
}
IconPill.storyName = 'icon, pill';

export function IconPosition() {
  return iconPositions.map((position, i) => (
    <Button icon={<UploadCloud />} iconPosition={position} key={i}>
      iconPosition {position}
    </Button>
  ));
}
IconPosition.storyName = 'iconPosition';

export function Floating() {
  return <Button floating>Floating Button</Button>;
}
Floating.storyName = 'floating';

export function Fluid() {
  return <Button fluid>Fluid Button</Button>;
}
Fluid.storyName = 'fluid';

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
FluidVaried.storyName = 'fluid (queried)';

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
Loading.storyName = 'loading';

export const Overflow = () => {
  return <Button overflow>Button</Button>;
};
Overflow.storyName = 'overflow';

export function TextShift() {
  return (
    <div
      style={{
        margin: '1rem auto',
        width: '15rem',
      }}
    >
      <Button
        icon={<ArrowRight />}
        iconPosition="right"
        textShift
        variant="minimalTransparent"
      >
        textShift Button
      </Button>
      <Button
        icon={<ArrowLeft />}
        textShift
        variant="minimalTransparent"
        style={{ marginLeft: 'auto' }}
      >
        textShift Button
      </Button>
    </div>
  );
}
TextShift.storyName = 'textShift';

export const CustomColor = () => {
  return (
    <div>
      <Button color="#07796a">Button</Button>
      <Button variant="minimal" color="#aa91e5">
        Button
      </Button>
      <Button
        variant="outline"
        color={{
          color: '#ffffff',
          hover: '#e7c03f',
          active: '#e7c03f',
        }}>
        Button
      </Button>
      <Button
        variant="outline"
        color={{
          color: '#000000',
          hover: '#e7c03f',
          active: '#e7c03f',
        }}>
        Button
      </Button>
      <Button
        color={{
          color: '#ff00d4',
          hover: '#e72626',
          active: '#700d2b',
        }}>
        Button
      </Button>
    </div>
  );
};
CustomColor.storyName = 'color';
