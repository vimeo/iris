import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextArea } from './TextArea';

import { Story } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

const TextAreaWCC = withCharacterCount(TextArea);

storiesOf('Components|inputs/TextArea', module)
  .add('TextArea', () => (
    <Story title="TextArea">
      <TextArea label="Text area" />
      <TextArea
        label="Text area with error message"
        format="negative"
        messages={{ error: 'This is an error.' }}
      />
    </Story>
  ))
  .add('withCharacterCount', () => (
    <Story title="TextArea">
      <TextAreaWCC
        label="Text area with character count"
        defaultValue="lorem ipsum dolor"
      />
      <TextAreaWCC
        label="Error message overrides character count"
        defaultValue="lorem ipsum dolor"
        format="negative"
        messages={{ error: 'This is an error.' }}
      />
    </Story>
  ));
