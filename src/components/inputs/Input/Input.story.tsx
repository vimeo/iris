import React, { useState } from 'react';

import { Input } from './Input';

import { Layout } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

export default { title: 'Components/Inputs/Text' };

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

export function Underline() {
  return (
    <Layout.StoryVertical>
      <Input
        size="xl"
        placeholder="Devoción Coffee"
        variant="underline"
      />
      <Input
        size="xl"
        placeholder="Starbucks Coffee"
        variant="underline"
        status="negative"
      />
      <Input
        size="xl"
        placeholder="Starbucks Coffee"
        variant="underline"
        status="negative"
        messages={{ error: 'Something is wrong!' }}
      />
      <Input
        size="xl"
        placeholder="Devoción Coffee"
        variant="underline"
        status="positive"
      />
      <Input
        size="xl"
        placeholder="Devoción Coffee"
        variant="underline"
        status="positive"
        messages={{ post: 'Something is right!' }}
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

export function AutosuggestA11y() {
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
      <Input
        size="xl"
        placeholder="Devoción"
        variant="underline"
        style={{ margin: '2rem 5rem' }}
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

export const AutosuggestWithFilter = () => (
  <AutosuggestWithFilterStory />
);
function AutosuggestWithFilterStory() {
  const [filter, filterSet] = useState('');

  const autosuggest = [
    'Devoción',
    'Cafe Grumpy',
    'Stumptown Coffee Roasters',
    'City of Saints',
    'Sey Coffee',
    "Partner's Coffee",
    'Blue Bottle Coffee',
    'Intelligentsia Coffee',
    'La Colombe',
  ];

  const suggestions = filterWhileTyping(autosuggest, filter);
  const update = (event) => filterSet(event.target.value);

  return (
    <Layout.StoryVertical>
      <Input
        autosuggest={suggestions}
        onBlur={update}
        onChange={update}
        onFocus={update}
        placeholder="Devoción"
        size="xl"
        style={{ margin: '4rem 5rem' }}
        variant="underline"
      />
    </Layout.StoryVertical>
  );
}

function filterWhileTyping(list, search) {
  if (!search) return null;
  if (search.length < 2) return null;
  if (list.includes(search)) return null;

  const suggestions = list.map((s) => [s, simplify(s)]);

  const filter = (s) => s[1].includes(simplify(search));
  const result = (s) => s[0];

  return suggestions.filter(filter).map(result);
}

function simplify(string) {
  return string
    .normalize('NFD')
    .toLowerCase()
    .replace(/[^A-Za-z0-9_]/g, '');
}
