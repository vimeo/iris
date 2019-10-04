import React from 'react';
import { storiesOf } from '@storybook/react';
import { ParagraphMd } from '../../legacy';
import { Notification } from './Notification';
import { Gear } from '../../icons';
import { Story } from '../../storybook';

const componentName = 'Notification';

const VariantStory = ({ variant }) => (
  <Story title={componentName}>
    <Notification
      variant={variant}
      id="someOptionalId"
      className="someOptionalClass"
    >
      <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
    </Notification>

    <br />
    <br />

    <Notification
      variant={variant}
      icon={false}
      header="lorem ipsum header"
    >
      <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
    </Notification>

    <br />
    <br />

    <Notification variant={variant} icon={<Gear />}>
      <ParagraphMd>Lorem ipsum dolor sit amet.</ParagraphMd>
    </Notification>
  </Story>
);

storiesOf('Components|Notification', module)
  .add('neutral', () => <VariantStory variant="neutral" />)
  .add('success', () => <VariantStory variant="success" />)
  .add('warning', () => <VariantStory variant="warning" />);