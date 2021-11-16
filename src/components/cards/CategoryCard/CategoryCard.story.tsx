import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { CategoryCard as CC, Props } from './CategoryCard';

import { Gear, Camera, Heart } from '../../../icons';

export default {
  title: 'components/CategoryCard',
  component: CC,
  argTypes: {
    icon: { control: { disable: true } },
    src: { control: { disable: true } },
    href: { table: { disable: true } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Grid>
      <CategoryCard
        {...args}
        icon={<Gear />}
        src="https://i.vimeocdn.com/custom_asset/26.jpg"
      >
        Sports
      </CategoryCard>
      <CategoryCard
        {...args}
        icon={<Camera />}
        src="https://i.vimeocdn.com/custom_asset/13.jpg"
      >
        Animation
      </CategoryCard>
      <CategoryCard
        {...args}
        icon={<Heart />}
        src="https://i.vimeocdn.com/custom_asset/28.jpg"
      >
        Travel
      </CategoryCard>
    </Grid>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'CategoryCard';

const CategoryCard = styled(CC)`
  aspect-ratio: 1 / 1;
`;

const Grid = styled.div`
  display: grid;
  grid: repeat(6, 1fr);
  gap: 1rem;
`;
