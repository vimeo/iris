import React from 'react';
import styled from 'styled-components';

import { NewItemCard } from './NewItemCard';

import { Layout } from '../../../storybook';

export default { title: 'Components|Cards/NewItem' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Grid>
        <NewItemCard
          onClick={() => console.log('add new item')}
          href="#"
        >
          Add New Item
        </NewItemCard>
      </Grid>
    </Layout.StoryVertical>
  );
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > * {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
  }
`;
