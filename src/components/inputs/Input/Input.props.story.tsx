import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';

import { Layout } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

export default {
  title: 'components/Input/props',
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
Status.storyName = 'status';

export function Disabled() {
  return (
    <Layout.StoryVertical>
      <Input label="Input (Text) disabled" disabled />
    </Layout.StoryVertical>
  );
}
Disabled.storyName = 'disabled';

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
Messages.storyName = 'messages';

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
Pill.storyName = 'pill';

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
Variant.storyName = 'variant';

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
      <Input label="Floating Input Label" floating />
      <Input
        label="Floating Input Label (disabled)"
        floating
        disabled
      />
      <Input
        label="Floating Input Label"
        messages={{ post: 'post message' }}
        floating
      />
      <Input
        floating
        label="Floating Input Label"
        status="negative"
        messages={{ error: 'error message' }}
      />
      <br />
      <br />
      <Input label="Floating Input Label" size="sm" floating />
      <Input label="Floating Input Label" size="md" floating />
      <Input label="Floating Input Label" size="lg" floating />
      <Input label="Floating Input Label" size="xl" floating />
    </Layout.StoryVertical>
  );
}
Floating.storyName = 'floating';

const SizeStoryWrapper = styled.div`
  margin: 1rem auto 1rem 1rem;
  max-width: 30rem;

  > div {
    margin-bottom: 1rem;
  }
`;

export function Size() {
  return (
    <SizeStoryWrapper>
      <Input label="Input (Text)" size="xs" />
      <Input label="Input (Text)" size="sm" />
      <Input label="Input (Text)" size="md" />
      <Input label="Input (Text)" size="lg" />
      <Input label="Input (Text)" size="xl" />
    </SizeStoryWrapper>
  );
}
Size.storyName = 'size';

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
Autosuggest.storyName = 'autosuggest';

export function Number() {
  <Layout.StoryVertical>
    <Input type="number" variant="underline" />
  </Layout.StoryVertical>;
}
