import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { CategoryCard as CC } from './CategoryCard';

import { Story } from '../../../storybook';
import { Gear, Camera, Heart } from '../../../icons';

storiesOf(`Components|cards`, module).add('Category Card', () => (
  <Story title="Category Card" width="100%">
    <Grid>
      <CategoryCard
        icon={<Gear />}
        src="https://i.vimeocdn.com/custom_asset/26.jpg"
        href="#"
      >
        Sports
      </CategoryCard>
      <CategoryCard
        icon={<Camera />}
        src="https://i.vimeocdn.com/custom_asset/13.jpg"
        href="#"
      >
        Animation
      </CategoryCard>
      <CategoryCard
        icon={<Heart />}
        src="https://i.vimeocdn.com/custom_asset/28.jpg"
      >
        Travel
      </CategoryCard>
    </Grid>
  </Story>
));

const CategoryCard = styled(CC)`
  min-width: 12rem;
  min-height: 12rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
  }
`;
