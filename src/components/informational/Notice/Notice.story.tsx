import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from '../../../typography';
import { Notice } from './Notice';
import { Gear } from '../../../icons';
import { Story } from '../../../storybook';

const VariantStory = ({ format }) => (
  <Story title="Notice">
    <Notice
      format={format}
      id="someOptionalId"
      className="someOptionalClass"
    >
      <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
    </Notice>

    <br />
    <br />

    <Notice
      format={format}
      icon={false}
      header="lorem ipsum header"
      onClose={() => null}
    >
      <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
    </Notice>

    <br />
    <br />

    <Notice format={format} icon={<Gear />}>
      <Paragraph size="2">Lorem ipsum dolor sit amet.</Paragraph>
    </Notice>
  </Story>
);

storiesOf('Components|informational/Notice', module)
  .add('primary', () => <VariantStory format="primary" />)
  .add('positive', () => <VariantStory format="positive" />)
  .add('negative', () => <VariantStory format="negative" />);
