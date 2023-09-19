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
  Clock,
  Heart,
  HeartFilled,
  PaperPlane,
} from '../../icons';

export default {
  title: 'components/Button/props',
  component: B,
};

const Button = styled(B)`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

export function Disabled({ args }) {
  return (
    <Button disabled {...args}>
      Button
    </Button>
  );
}
Disabled.storyName = 'disabled';

export function Element({ args }) {
  return (
    <Button
      {...args}
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
Element.storyName = 'element';

export function Format({ args }) {
  return formats.map((format, i) => (
    <Button key={i} format={format} children={format} {...args} />
  ));
}
Format.storyName = 'format';

export function Variant({ args }) {
  return variants.map((variant, i) => (
    <Button key={i} variant={variant} children={variant} {...args} />
  ));
}
Variant.storyName = 'variant';

export function Status({ args }) {
  return statuses.map((status, i) => (
    <Button key={i} status={status} children={status} {...args} />
  ));
}
Status.storyName = 'status';

export function Size({ args }) {
  const style = { display: 'inline-flex' };

  return sizes.map((size, i) => (
    <div key={i} style={{ display: 'flex' }} {...args}>
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

export function Icon({ args }) {
  return <Button icon={<DownloadArrow {...args} />} />;
}
Icon.storyName = 'icon';

export function IconPill({ args }) {
  return <Button icon={<Plus />} pill {...args} />;
}
IconPill.storyName = 'icon, pill';

export function IconPosition({ args }) {
  return iconPositions.map((position, i) => (
    <Button
      icon={<UploadCloud />}
      iconPosition={position}
      key={i}
      {...args}
    >
      iconPosition {position}
    </Button>
  ));
}
IconPosition.storyName = 'iconPosition';

export function IconSmall({ args }) {
  return (
    <div {...args}>
      {[Clock, Heart, HeartFilled, PaperPlane].map((Icon, idx) => {
        return <Button key={idx} size="sm" icon={<Icon />} />;
      })}
    </div>
  );
}
IconSmall.storyName = 'icon (small)';

export function Fluid({ args }) {
  return (
    <Button fluid {...args}>
      Fluid Button
    </Button>
  );
}
Fluid.storyName = 'fluid';

export function FluidVaried({ args }) {
  return (
    <>
      <Button
        {...args}
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

export function LoadingStory({ args }) {
  const [loading, setLoading] = useState(false);
  const onClick = () => setLoading((loading) => !loading);

  return (
    <Button size="lg" loading={!loading} onClick={onClick} {...args}>
      Click Me
    </Button>
  );
}
export const Loading = ({ args }) => <LoadingStory {...args} />;
Loading.storyName = 'loading';

export function Overflow({ args }) {
  return (
    <Button overflow {...args}>
      Button
    </Button>
  );
}
Overflow.storyName = 'overflow';

export function TextShift({ args }) {
  return (
    <div
      {...args}
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

export function CustomColor({ args }) {
  return (
    <div {...args}>
      <pre>color="#07796a"</pre>
      <Button color="#07796a">Button</Button>
      <pre>color="#aa91e5"</pre>
      <Button color="#aa91e5">Button</Button>
      <pre>color: '#ffffff', hover: '#e7c03f', active: '#e7c03f'</pre>
      <Button
        color={{
          color: '#ffffff',
          hover: '#e7c03f',
          active: '#e7c03f',
        }}
      >
        Button
      </Button>
      <pre>
        color: '#000000', hover: '#e7c03f', active: '#e7c03f',
      </pre>
      <Button
        color={{
          color: '#000000',
          hover: '#e7c03f',
          active: '#e7c03f',
        }}
      >
        Button
      </Button>
      <pre>
        color: '#ff00d4', hover: '#e72626', active: '#700d2b',
      </pre>
      <Button
        color={{
          color: '#ff00d4',
          hover: '#e72626',
          active: '#700d2b',
        }}
      >
        Button
      </Button>
      <pre>
        color: '#ff00d4', hover: '#e72626', active: '#700d2b',
        textColor: '#ffffff',
      </pre>
      <Button
        color={{
          color: '#ff00d4',
          hover: '#e72626',
          active: '#700d2b',
          textColor: '#ffffff',
        }}
      >
        Button with custom textColor
      </Button>
    </div>
  );
}
CustomColor.storyName = 'color';
