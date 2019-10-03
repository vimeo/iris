import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Card as C } from './Card';

import { Story } from '../../../storybook';

const Card = styled(C)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 0.005rem;
  font-size: 1.25rem;
`;

storiesOf(`Components|Cards/`, module).add('Card', () => (
  <Story title="Card" width="100%">
    <Grid>
      <Card>Card</Card>
      <Card loading>Card (loading)</Card>
      <Card selected>Card (selected)</Card>
    </Grid>
  </Story>
));

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
    min-height: 20vw;
  }
`;
