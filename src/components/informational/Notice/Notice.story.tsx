import React from 'react';
import { storiesOf } from '@storybook/react';

import { Notice } from './Notice';

import { ParagraphMd } from '../../../legacy';
import { Gear } from '../../../icons';
import { Story } from '../../../storybook';

const componentName = 'Notice';

const VariantStory = ({ variant }) => (
  <Story title={componentName}>
    <Notice
      variant={variant}
      id="someOptionalId"
      className="someOptionalClass"
    >
      <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
    </Notice>

    <br />
    <br />

    <Notice
      variant={variant}
      icon={false}
      header="lorem ipsum header"
    >
      <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
    </Notice>

    <br />
    <br />

    <Notice variant={variant} icon={<Gear />}>
      <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
    </Notice>
  </Story>
);

storiesOf('Components|informational/Notice', module)
  .add('neutral', () => <VariantStory variant="neutral" />)
  .add('success', () => <VariantStory variant="success" />)
  .add('warning', () => <VariantStory variant="warning" />);
