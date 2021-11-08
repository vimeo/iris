import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Grid } from './Grid';

import { Header } from '../../typography';
import { Layout } from '../../storybook';

export default {
  title: 'components/Grid/props',
  parameters: { a11y: { disabled: true } },
};

export function Masonry() {
  const children = repeat(12, (key) => (
    <Item style={{ borderRadius: '0.5rem' }} key={key}>
      <div
        style={{
          height: random(),
          width: '100%',
          background: 'black',
        }}
      ></div>
      Example {key + 1}
    </Item>
  ));

  return (
    <Grid columns={3} masonry style={{ gridGap: '10px' }}>
      {children}
    </Grid>
  );
}

export function FixedColumns() {
  return (
    <Layout.StoryVertical>
      <Grid columns={3}>
        {repeat(12, (key) => (
          <Item key={key} style={{ height: 120 }}>
            <Header size="4">3 columns</Header>
          </Item>
        ))}
      </Grid>
    </Layout.StoryVertical>
  );
}

export function DynamicColumns() {
  return (
    <Grid columns={{ minWidth: 250 }}>
      {repeat(12, (key) => (
        <Item key={key} style={{ height: 120 }}>
          <Header size="4">Min width of column 250px</Header>
        </Item>
      ))}
    </Grid>
  );
}

export function ResponsiveColumns() {
  return (
    <>
      <Header size="5">
        It is possible to create a grid with responsive columns. For
        example, columns=[[1080, 5], [720, 3], [480, 2], [360, 1]]
      </Header>
      <Header size="5">
        This means that at min screen width 1080px, there will be 5
        columns, at min screen width 720px, there will be 3 columns,
        etc.
      </Header>
      <Grid
        columns={[
          [1080, 5],
          [720, 3],
          [480, 2],
          [360, 1],
        ]}
      >
        {repeat(12, (key) => (
          <Item key={key} style={{ height: 120 }}>
            <Header size="4">{key}</Header>
          </Item>
        ))}
      </Grid>
    </>
  );
}

export function ItemHeights() {
  return (
    <Layout.StoryVertical>
      <Grid columns={4}>
        {repeat(4, (key) => (
          <Item key={key}>
            <Header size="5">No height given</Header>
          </Item>
        ))}
      </Grid>
      <Header size="5">Fixed height</Header>
      <Grid columns={4}>
        {repeat(4, (key) => (
          <Item style={{ height: 72 }} key={key} />
        ))}
      </Grid>
      <Header size="5">Square</Header>
      <Grid columns={4}>
        {repeat(4, (key) => (
          <SquareItem key={key} />
        ))}
      </Grid>
      <Header size="5">16:9</Header>
      <Grid columns={4}>
        {repeat(4, (key) => (
          <VideoItem style={{ height: '100%' }} key={key} />
        ))}
      </Grid>
    </Layout.StoryVertical>
  );
}

export function Featured() {
  return (
    <Layout.StoryVertical>
      <Grid columns={4} featured={0}>
        {repeat(9, (key) => (
          <Item style={{ height: 120 }}>
            <Header size="4">{key + 1}</Header>
            <Header size="6">(4 columns)</Header>
          </Item>
        ))}
      </Grid>
    </Layout.StoryVertical>
  );
}

function random(min = 40, max = 240) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

const SquareItem = styled(Item)`
  &::after {
    display: block;
    content: ' ';
    padding-bottom: 100%;
  }
`;

const VideoItem = styled(Item)`
  &::after {
    display: block;
    content: ' ';
    padding-bottom: 56.25%;
  }
`;
