import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { Card as C, Props } from './Card';
import { Header } from '../../typography';

export default {
  title: 'components/Card',
  component: C,
  argTypes: {
    noHoverState: { table: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Grid>
      <Card {...args}>
        <Header>Card 1</Header>
      </Card>
      <Card {...args}>
        <Header>Card 2</Header>
      </Card>
      <Card {...args}>
        <Header>Card 3</Header>
      </Card>
    </Grid>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Card';

const Card = styled(C)`
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
