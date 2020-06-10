import React from 'react';

import { Input } from './Input';

import { Layout } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

export default { title: 'components|inputs/Text/' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Input label="Input (Text)" />
      <Input label="Input (Text) disabled" disabled />
      <Input
        label="Input (Text) with post messagge"
        messages={{ post: 'post message' }}
      />
      <Input
        label="Input (Text) with error message"
        status="negative"
        messages={{ error: 'error message' }}
      />
    </Layout.StoryVertical>
  );
}

export function Pill() {
  return (
    <Layout.StoryVertical>
      <Input pill label="Input (Text)" />
      <Input pill label="Input (Text) disabled" disabled />
      <Input
        pill
        label="Input (Text) with post message"
        messages={{ post: 'post message' }}
      />
      <Input
        pill
        label="Input (Text) with error message"
        status="negative"
        messages={{ error: 'error message' }}
      />
    </Layout.StoryVertical>
  );
}

export function CharacterCount() {
  return (
    <Layout.StoryVertical>
      <InputWCC label="Input (Text) with character count" />
      <Input
        label="Input (Text) with character count disabled"
        disabled
      />
      <InputWCC
        label="Input (Text) with character count. Post message overrides character count."
        messages={{ post: 'post message' }}
      />
      <InputWCC
        label="Input (Text) with character count. Error overrides character count."
        status="negative"
        messages={{ error: 'error message' }}
      />
    </Layout.StoryVertical>
  );
}

export function FloatingInput() {
  return (
    <Layout.StoryVertical>
      <Input label="Input (Text)" floating />
      <Input label="Input (Text) disabled" floating disabled />
      <Input
        label="Input (Text)"
        messages={{ post: 'post message' }}
        floating
      />
      <Input
        floating
        label="Input (Text)"
        status="negative"
        messages={{ error: 'error message' }}
      />
      <Input label="Input (Text)" floating pill />
    </Layout.StoryVertical>
  );
}

const InputWCC = withCharacterCount(Input);
