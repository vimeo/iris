import React, { useState } from 'react';
import styled from 'styled-components';

import { Toolbar } from '../Toolbar';

import { Gear } from '../../../icons';
import { Header as H } from '../../../typography';
import { Layout } from '../../../storybook';

export function State() {
  const state = useState('Item 2');

  return (
    <Layout.FullBleed>
      <Toolbar attach="left" state={state}>
        <Toolbar.Item label="Item 1" icon={<Gear />}>
          <Header size="3">Item 1</Header>
        </Toolbar.Item>

        <Toolbar.Item label="Item 2" icon={<Gear />}>
          <Header size="3">Item 2</Header>
        </Toolbar.Item>

        <Toolbar.Break />

        <Toolbar.Item label="Item 3" icon={<Gear />}>
          <Header size="3">Item 3</Header>
        </Toolbar.Item>

        <Toolbar.Item label="Item 4" icon={<Gear />}>
          <Header size="3">Item 1</Header>
        </Toolbar.Item>

        <Toolbar.Break />

        <Toolbar.Item label="Item 5" icon={<Gear />}>
          <Header size="3">Item 4</Header>
        </Toolbar.Item>
      </Toolbar>
    </Layout.FullBleed>
  );
}
State.storyName = 'state';

const Header = styled(H)`
  margin-top: 0;
`;
