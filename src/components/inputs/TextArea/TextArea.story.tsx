import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextArea } from './TextArea';

import { Story } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

const TextAreaWCC = withCharacterCount(TextArea);

storiesOf('Components|inputs/TextArea', module)
  .add('TextArea', () => (
    <Story title="TextArea">
      <TextArea />
    </Story>
  ))
  .add('withCharacterCount', () => (
    <Story title="TextArea">
      <TextAreaWCC value="lorem ipsum dolor" />
    </Story>
  ));
