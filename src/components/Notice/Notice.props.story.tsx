import React from 'react';

import { Notice } from './Notice';

import { Gear } from '../../icons';

export default {
  title: 'components/Notice/props',
};

export function Primary() {
  return <VariantStory format="primary" />;
}

export function PrimaryPill() {
  return <VariantStory format="primary" pill />;
}
PrimaryPill.storyName = 'Primary (Pill)';

export function Positive() {
  return <VariantStory format="positive" />;
}

export function PositivePill() {
  return <VariantStory format="positive" pill />;
}
PositivePill.storyName = 'Positive (Pill)';

export function Negative() {
  return <VariantStory format="negative" />;
}

export function NegativePill() {
  return <VariantStory format="negative" pill />;
}
NegativePill.storyName = 'Negative (Pill)';

function VariantStory({ format, pill = null }) {
  return (
    <>
      <Notice format={format} pill={pill}>
        Lorem ipsum dolor sit amet.
      </Notice>

      <Notice
        format={format}
        icon={false}
        header="lorem ipsum header"
        onClose={() => console.log('Notice Closed.')}
        pill={pill}>
        Lorem ipsum dolor sit amet.
      </Notice>

      <Notice format={format} icon={<Gear />} pill={pill}>
        Lorem ipsum dolor sit amet.
      </Notice>
    </>
  );
}
