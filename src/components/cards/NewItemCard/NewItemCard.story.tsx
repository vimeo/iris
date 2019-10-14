import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { storiesOf } from '@storybook/react';

import { NewItemCard } from './NewItemCard';

import { Story } from '../../../storybook';

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
      <Spacer />
      <Spacer />
      <Spacer />
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
  padding: 5rem 1rem;
  transition: 200ms;
  border-radius: 0.2rem;
  background: center/cover url('http://placekitten.com/630/630');

  ${({ theme: { content } }) => css`
    border: 1px solid ${rgba(content.color, 0.5)};
    color: ${content.color};
  `}
`;

const doClick = event => {
  event.preventDefault();
  console.log('click! ', event);
};
