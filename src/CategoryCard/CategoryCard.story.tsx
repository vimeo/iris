import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import { CategoryCard } from './CategoryCard';
import { Gear, Camera, Heart } from '../Icons';
import styled from 'styled-components';

const $CategoryCard = styled(CategoryCard)`
  min-width: 12rem;
  min-height: 15rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 0 0 calc(25% - 2rem);
    margin: 1rem;
  }
`;

const componentName = 'Category Card';

storiesOf(`components/`, module).add('Category Card', () => (
  <Story title={componentName} width="100%">
    <Grid>
      <$CategoryCard
        icon={<Gear />}
        backgroundImageURL="https://i.vimeocdn.com/custom_asset/26.jpg"
      >
        Sports
      </$CategoryCard>
      <$CategoryCard
        icon={<Camera />}
        backgroundImageURL="https://i.vimeocdn.com/custom_asset/13.jpg"
      >
        Animation
      </$CategoryCard>
      <$CategoryCard
        icon={<Heart />}
        backgroundImageURL="https://i.vimeocdn.com/custom_asset/28.jpg"
      >
        Travel
      </$CategoryCard>
    </Grid>
  </Story>
));
