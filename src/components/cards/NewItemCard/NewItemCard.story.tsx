import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { NewItemCard } from './NewItemCard';

import { Story } from '../../../storybook';
import { theme } from '../../../themes';

storiesOf(`Components|cards/`, module).add('New Item Card', () => (
  <Story title="New Item Card" width="100%">
    <Grid>
      <NewItemCard href="#">Add New Item</NewItemCard>
      <NewItemCard onClick={doClick} href="#" target="_blank">
        Add Another New Item
      </NewItemCard>
      <NewItemCard onClick={doClick} href="#">
        Add Some Other Item
      </NewItemCard>
      <NewItemCard onClick={doClick}>Add All the Item</NewItemCard>
      <NewItemCard href="#">Add New Item</NewItemCard>

      <Spacer>
        <h3>Lorem, ipsum.</h3>
      </Spacer>
      <Spacer>
        <h3>Lorem, ipsum.</h3>
      </Spacer>
      <Spacer>
        <h3>Lorem, ipsum.</h3>
      </Spacer>
    </Grid>
  </Story>
));

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
  }
`;

const Spacer = styled.div`
  border: 1px solid ${theme.color};
  color: ${theme.color};
  padding: 5rem 1rem;
  transition: 200ms;
`;

const doClick = event => {
  event.preventDefault();
  console.log('click! ', event);
};
