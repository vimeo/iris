import React from 'react';
import styled from 'styled-components';

import { CategoryCard as CC } from './CategoryCard';

import { Layout } from '../../../storybook';
import { Gear, Camera, Heart } from '../../../icons';

export default { title: 'Components|Cards/Category' };

export function Common() {
  return (
    <Layout.StoryVertical>
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
    </Layout.StoryVertical>
  );
}

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
