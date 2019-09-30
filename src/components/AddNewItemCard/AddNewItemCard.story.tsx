import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { AddNewItemCard } from './AddNewItemCard';

import { Story } from '../../storybook';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
  }
`;

const componentName = 'Add New Item Card';

storiesOf(`Components|Cards`, module).add('Add New Item Card', () => (
  <Story title={componentName} width="100%">
    <Grid>
      <AddNewItemCard
        text="Add New Item"
        anchorProps={{ href: '#' }}
      />
      <AddNewItemCard
        text="Add Another New Item"
        anchorProps={{
          onClick: () => console.log('click!'),
          href: '#',
          target: '_blank',
        }}
      />
      <AddNewItemCard
        text="Add Some Other Item"
        anchorProps={{
          onClick: () => console.log('click!'),
          href: '#',
        }}
      />
      <AddNewItemCard
        text="Add All the Item"
        anchorProps={{
          onClick: () => console.log('click!'),
        }}
      />
      <AddNewItemCard
        fluid
        text="Add New Item"
        anchorProps={{ href: '#' }}
      />

      <div
        style={{
          border: '1px solid black',
          padding: '5rem 1rem',
        }}
      >
        <h3>Lorem, ipsum.</h3>
      </div>
      <div
        style={{
          border: '1px solid black',
          padding: '5rem 1rem',
        }}
      >
        <h3>Lorem, ipsum.</h3>
      </div>
      <div
        style={{
          border: '1px solid black',
          padding: '5rem 1rem',
        }}
      >
        <h3>Lorem, ipsum.</h3>
      </div>
    </Grid>
  </Story>
));
