import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { CardCategory as CC, Props } from './CardCategory';

import { Gear, Camera, Heart } from '../../icons';

export default {
  title: 'components/CardCategory',
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
      <CardCategory
        {...args}
        icon={<Gear />}
        src="https://i.vimeocdn.com/custom_asset/26.jpg"
      >
        Sports
      </CardCategory>
      <CardCategory
        {...args}
        icon={<Camera />}
        src="https://i.vimeocdn.com/custom_asset/13.jpg"
      >
        Animation
      </CardCategory>
      <CardCategory
        {...args}
        icon={<Heart />}
        src="https://i.vimeocdn.com/custom_asset/28.jpg"
      >
        Travel
      </CardCategory>
    </Grid>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'CardCategory';

const CardCategory = styled(CC)`
  aspect-ratio: 1 / 1;
`;

const Grid = styled.div`
  display: grid;
  grid: auto-flow / repeat(6, 1fr);
  gap: 1rem;
`;
