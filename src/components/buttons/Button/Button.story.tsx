import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Button as B } from './Button';
import {
  DownloadArrow,
  Plus,
  PaperPlane,
  Heart,
  Gear,
  ChevronDown,
} from '../../../icons';

const Button = styled(B)`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

import { Story } from '../../../storybook';
import { Header } from '../../../typography';

const componentName = 'Button';

const Cols = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;

storiesOf(`Components|buttons/Button/props/`, module).add(
  'circular',
  () => (
    <Story title="Circular" width="100%">
      <Button circular icon={<Plus />} size="sm" />
      <Button circular icon={<Plus />} size="md" />
      <Button circular icon={<Plus />} size="lg" />
    </Story>
  ),
);

storiesOf(`Components|buttons/Button/props/fluid/`, module)
  .add('true', () => (
    <Story title="Button" width="100%">
      {formats.map((format, i) => (
        <div key={i}>
          <Button fluid format={format} children={format} size="lg" />
        </div>
      ))}
      {statuses.map((status, i) => (
        <div key={i}>
          <Button fluid status={status} children={status} size="lg" />
        </div>
      ))}
      <br />
    </Story>
  ))
  .add('varied', () => (
    <Story title="Button" width="100%">
      <Button
        fluid={{ min: 0, max: 500 }}
        format="basic"
        children="basic { min: 0, max: 500 }"
        size="lg"
      />
      <br />
      <Button
        fluid={{ min: 250, max: 750 }}
        format="soft"
        children="soft { min: 250, max: 750 }"
        size="lg"
      />
      <br />
      <Button
        fluid={{ min: 500, max: 1000 }}
        format="alternative"
        children="alternative { min: 500, max: 1000 }"
        size="lg"
      />
      <br />
      <Button
        fluid={{ min: 750, max: 1250 }}
        format="secondary"
        children="secondary { min: 750, max: 1250 }"
        size="lg"
      />
      <br />
      <Button
        fluid={{ min: 1000, max: 1500 }}
        format="primary"
        children="primary { min: 1000, max: 1500 }"
        size="lg"
      />
      <br />
      <Button
        fluid={{ min: 1250, max: 1750 }}
        status="positive"
        children="positive { min: 1250, max: 1750 }"
        size="lg"
      />
      <br />
      <Button
        fluid={{ min: 1500, max: 2000 }}
        status="negative"
        children="negative { min: 1500, max: 2000 }"
        size="lg"
      />
      <br />
    </Story>
  ));

storiesOf(
  `Components|buttons/Button/props/icon/iconPosition/`,
  module,
)
  .add('left', () => (
    <Story title="Button" width="100%">
      {variants.map((variant, i) => (
        <Cols key={i}>
          {formats.map((format, i) => (
            <div key={i}>
              <Button
                variant={variant}
                format={format}
                children={format}
                icon={<Plus />}
              />
            </div>
          ))}
          {statuses.map((status, i) => (
            <div key={i}>
              <Button
                variant={variant}
                status={status}
                children={status}
                icon={<Plus />}
              />
            </div>
          ))}
          <br />
        </Cols>
      ))}
    </Story>
  ))
  .add('right', () => (
    <Story title="Button" width="100%">
      {variants.map((variant, i) => (
        <Cols key={i}>
          {formats.map((format, i) => (
            <div key={i}>
              <Button
                variant={variant}
                format={format}
                children={format}
                icon={<ChevronDown />}
                iconPosition="right"
              />
            </div>
          ))}
          {statuses.map((status, i) => (
            <div key={i}>
              <Button
                variant={variant}
                status={status}
                children={status}
                icon={<ChevronDown />}
                iconPosition="right"
              />
            </div>
          ))}
          <br />
        </Cols>
      ))}
    </Story>
  ))
  .add('featured', () => (
    <Story title="Button" width="100%">
      {formats.map((format, i) => (
        <div key={i}>
          <Button
            format={format}
            children={format}
            icon={<PaperPlane />}
            iconPosition="featured"
            size="lg"
          />
        </div>
      ))}
      {statuses.map((status, i) => (
        <div key={i}>
          <Button
            status={status}
            children={status}
            icon={<PaperPlane />}
            iconPosition="featured"
            size="lg"
          />
        </div>
      ))}
      <br />
    </Story>
  ));

storiesOf(`Components|buttons/Button`, module)
  .add('Button', () => (
    <Story title={componentName} width="100%">
      {formats.map((format, i) => (
        <div key={i}>
          <Button format={format} children={format} />
        </div>
      ))}
      {statuses.map((status, i) => (
        <div key={i}>
          <Button status={status} children={status} />
        </div>
      ))}
    </Story>
  ))
  .add('text overflow', () => (
    <Story title="text overflow" width="100%">
      {formats.map((format, i) => (
        <div key={i}>
          <Button
            format={format}
            children={format + ' lorem ipsum dolor'}
            style={{ maxWidth: '6rem' }}
          />
        </div>
      ))}
      {statuses.map((status, i) => (
        <div key={i}>
          <Button
            status={status}
            children={status + ' lorem ipsum dolor'}
            style={{ maxWidth: '6rem' }}
          />
        </div>
      ))}
    </Story>
  ));

storiesOf(`Components|buttons/Button/props/icon/`, module).add(
  'icon',
  () => (
    <Story title="Icon Only" width="100%">
      {formats.map((format, i) => (
        <div key={i}>
          <Button format={format} icon={<DownloadArrow />} />
        </div>
      ))}
      {statuses.map((status, i) => (
        <div key={i}>
          <Button status={status} icon={<DownloadArrow />} />
        </div>
      ))}
    </Story>
  ),
);

storiesOf(`Components|buttons/Button/props`, module).add(
  'loading',
  () => <ButtonLoadingStory />,
);
// .add('Render Error Example', () => (
//   <Story title="Render Error">
//     <Button format="badFormatName" debug>
//       hey
//     </Button>
//     <Button format="primary">hey</Button>
//     <Button format="badFormatNameTwo" debug>
//       hey
//     </Button>
//   </Story>
// ));

const ButtonLoadingStory = props => {
  const [loading, setLoading] = useState(false);
  const doClick = () => setLoading(loading => !loading);

  return (
    <Story title="Loading" width="100%">
      <Button size="lg" loading={!loading} onClick={doClick}>
        Click Me
      </Button>
      <Button
        icon={<Gear />}
        loading={loading}
        onClick={doClick}
        format="primary"
        variant="outline"
        size="md"
      >
        Click Me
      </Button>
      <Button
        icon={<Gear />}
        loading={!loading}
        onClick={doClick}
        status="positive"
        size="sm"
      >
        Click Me
      </Button>
      <Button
        loading={loading}
        onClick={doClick}
        format="secondary"
        size="xs"
      >
        Click Me
      </Button>
    </Story>
  );
};

const formats = [
  'basic',
  'soft',
  'alternative',
  'secondary',
  'primary',
] as const;
const statuses = ['positive', 'negative'] as const;
const variants = [
  'solid',
  'transparent',
  'outline',
  'dashed',
  'minimal',
  'hyperminimal',
  'minimalTransparent',
] as const;
