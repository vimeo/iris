import React from 'react';

import { Notice } from './Notice';

import { Gear } from '../../icons';

export default {
  title: 'components/Notice/props',
};

export function Primary({ args }) {
  return <VariantStory format="primary" {...args} />;
}

export function PrimaryPill({ args }) {
  return <VariantStory format="primary" pill />;
}
PrimaryPill.storyName = 'Primary (Pill)';

export function Positive({ args }) {
  return <VariantStory format="positive" {...args} />;
}

export function PositivePill({ args }) {
  return <VariantStory format="positive" pill {...args} />;
}
PositivePill.storyName = 'Positive (Pill)';

export function Negative({ args }) {
  return <VariantStory format="negative" {...args} />;
}

export function NegativePill({ args }) {
  return <VariantStory format="negative" pill {...args} />;
}
NegativePill.storyName = 'Negative (Pill)';

function VariantStory({ format, pill = null, ...args }) {
  return (
    <>
      <Notice format={format} pill={pill} {...args}>
        Lorem ipsum dolor sit amet.
      </Notice>

      <Notice
        format={format}
        icon={false}
        header="lorem ipsum header"
        onClose={() => console.log('Notice Closed.')}
        pill={pill}
      >
        Lorem ipsum dolor sit amet.
      </Notice>

      <Notice format={format} icon={<Gear />} pill={pill}>
        Lorem ipsum dolor sit amet.
      </Notice>
    </>
  );
}
