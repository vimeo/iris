import React from 'react';

import { Header } from './Header';

import { Layout } from '../../storybook';

export default { title: 'typography/Headers' };

export function Size() {
  return (
    <Layout.StoryVertical>
      <Header size="plusUltra">Header Plus Ultra</Header>
      <Header size="1">Header 1</Header>
      <Header size="2">Header 2</Header>
      <Header size="3">Header 3</Header>
      <Header size="4">Header 4</Header>
      <Header size="5">Header 5</Header>
      <Header size="6">Header 6</Header>
      <Header size="7">Header 7</Header>
    </Layout.StoryVertical>
  );
}

export function Variant() {
  return (
    <Layout.StoryVertical>
      <Header size="1" variant="thin">
        Header 1
      </Header>
      <Header size="2" variant="thin">
        Header 2
      </Header>
      <Header size="3" variant="thin">
        Header 3
      </Header>
      <Header size="4" variant="thin">
        Header 4
      </Header>
      <Header size="5" variant="thin">
        Header 5
      </Header>
      <Header size="6" variant="thin">
        Header 6
      </Header>
      <Header size="7" variant="thin">
        Header 7
      </Header>
    </Layout.StoryVertical>
  );
}

export function Editable() {
  return (
    <Layout.StoryVertical>
      <Header
        size="plusUltra"
        placeholder="Edit me!"
        contentEditable
        onFocus={(e) => console.log(e)}
      >
        Editable Header plusUltra
      </Header>
      <Header
        size="1"
        placeholder="Edit me!"
        contentEditable
        onFocus={(e) => console.log(e)}
      >
        Editable Header 1
      </Header>
      <Header
        size="3"
        placeholder="Edit me!"
        contentEditable
        onFocus={(e) => console.log(e)}
      >
        Editable Header 3
      </Header>
      <Header
        size="6"
        placeholder="Edit me!"
        contentEditable
        onFocus={(e) => console.log(e)}
      >
        Editable Header 6
      </Header>
    </Layout.StoryVertical>
  );
}
