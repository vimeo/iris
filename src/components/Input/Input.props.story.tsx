import React from 'react';

import { Input } from './Input';

import { Layout } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

export default {
  title: 'Components/Inputs/Input/Props',
};

export function Status() {
  return (
    <Layout.StoryVertical>
      <Input
        label="Input (Text) - error!"
        status="negative"
        messages={{ error: 'Optional error message' }}
      />
      <Input
        label="Input (Text) - success!"
        status="positive"
        messages={{ help: 'Optional help message' }}
      />
      <Input
        label="Input (Text) - error!"
        status="negative"
        messages={{ error: 'Optional error message' }}
        variant="underline"
      />
      <Input
        label="Input (Text) - success!"
        status="positive"
        messages={{ help: 'Optional help message' }}
        variant="underline"
      />
    </Layout.StoryVertical>
  );
}

export function Disabled() {
  return (
    <Layout.StoryVertical>
      <Input label="Input (Text) disabled" disabled />
    </Layout.StoryVertical>
  );
}

export function Messages() {
  return (
    <Layout.StoryVertical>
      <Input
        label="Input (Text) with post messagge"
        messages={{ post: 'post message' }}
      />
      <Input
        label="Input (Text) with error message"
        status="negative"
        messages={{ error: 'error message' }}
      />
      <Input
        label="Input (Text) with pre message"
        messages={{ pre: 'Additional info goes here' }}
      />
      <Input
        label="Input (Text) with help message"
        status="positive"
        messages={{ help: 'help message' }}
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

export function Variant() {
  return (
    <Layout.StoryVertical>
      <Input size="xl" placeholder="Devoción Coffee" />
      <Input
        size="xl"
        placeholder="Devoción Coffee"
        variant="underline"
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
CharacterCount.storyName = 'withCharacterCount';

export function Floating() {
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

export function Autosuggest() {
  return (
    <Layout.StoryVertical>
      <Input
        size="xl"
        placeholder="Devoción"
        variant="underline"
        style={{ margin: '4rem 5rem' }}
        autosuggest={[
          'Devoción',
          'Cafe Grumpy',
          'Stumptown Coffee Roasters',
          'City of Saints',
          'Sey Coffee',
          "Partner's Coffee",
          'Blue Bottle Coffee',
          'Intelligentsia Coffee',
          'La Colombe',
        ]}
      />
    </Layout.StoryVertical>
  );
}
