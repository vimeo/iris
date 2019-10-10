import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextArea } from './TextArea';
import { Story } from '../../../storybook';

storiesOf('Components|inputs/', module).add('TextArea', () => (
  <Story title="TextArea">
    <TextArea />
  </Story>
));
