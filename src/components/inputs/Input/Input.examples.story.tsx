import React, { useState } from 'react';

import { Input } from './Input';

import { Layout } from '../../../storybook';

export default {
  title: 'components/Input/examples',
};

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
