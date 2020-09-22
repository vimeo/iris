import React from 'react';
import styled from 'styled-components';

import { Card as C } from './Card';

import { Layout } from '../../../storybook';

export default { title: 'Components|Cards/Card' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <Grid>
        <Card>Card</Card>
        <Card loading>Card (loading)</Card>
        <Card selected>Card (selected)</Card>
      </Grid>
    </Layout.StoryVertical>
  );
}

const Card = styled(C)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 0.005rem;
  font-size: 1.25rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > * {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
    min-height: 20vw;
  }
`;
