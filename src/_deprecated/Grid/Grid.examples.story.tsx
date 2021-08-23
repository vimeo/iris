import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Grid } from './Grid';

import { Header } from '../../typography';
import { Layout } from '../../storybook';

// export default {
//   title: 'components/Grid/examples',
//   parameters: { a11y: { disabled: true } },
// };

export { Showcase } from '../examples/Showcase.story';
export { VideoList } from '../examples/VideoList.story';

export function GridGap() {
  return (
    <Layout.StoryVertical>
      <Grid columns={4}>
        {repeat(8, (key) => (
          <Item style={{ height: 120 }} key={key}>
            <Header size="4">Default grid gap (24)</Header>
          </Item>
        ))}
      </Grid>
      <Grid columns={4} style={{ gridGap: 12 }}>
        {repeat(8, (key) => (
          <Item style={{ height: 120 }} key={key}>
            <Header size="4">12px gap</Header>
          </Item>
        ))}
      </Grid>
      <Grid columns={4} style={{ gridGap: 6 }}>
        {repeat(8, (key) => (
          <Item style={{ height: 120 }} key={key}>
            <Header size="4">6px gap</Header>
          </Item>
        ))}
      </Grid>
      <Grid columns={4} style={{ gridGap: 1 }}>
        {repeat(8, (key) => (
          <Item style={{ height: 120 }} key={key}>
            <Header size="4">1px gap</Header>
          </Item>
        ))}
      </Grid>
    </Layout.StoryVertical>
  );
}

function repeat(length, element) {
  return Array.from({ length }).map((_, key) =>
    cloneElement(element(key), { key })
  );
}

const Item = styled.div`
  background: ${({ theme }) => rgba(theme.content.color, 0.2)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 700;
`;
