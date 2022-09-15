import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { Card, Props } from './Card';
import { Header } from '../../typography';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    noHoverState: { table: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Grid>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} {...args}>
          <CardLayout>
            <Header>Card {index + 1}</Header>
          </CardLayout>
        </Card>
      ))}
    </Grid>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Card';

const CardLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vw;
  aspect-ratio: 3 / 2;
`;

const Grid = styled.div`
  display: grid;
  grid: auto-flow / repeat(3, 1fr);
  gap: 1rem;
`;
