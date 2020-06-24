import React from 'react';
import styled from 'styled-components';
import { number } from '@storybook/addon-knobs';

import { elevation } from './elevation';

import { StoryCard } from '../../storybook';

export default { title: 'labs|elevation/' };

export function Common() {
  return (
    <Box
      elevation={number(
        'elevation',
        defaultValue,
        options,
        'elevation',
      )}
    >
      {number('elevation', defaultValue, options, 'elevation')}
    </Box>
  );
}

export function Scale() {
  return elevations.map(e => <Box elevation={e}>{e}</Box>);
}

const defaultValue = 500;
const options = {
  range: true,
  min: 0,
  max: 1000,
  step: 100,
};

const Box = styled(StoryCard)<any>`
  width: 10rem;
  height: 10rem;
  border-radius: 0.25rem;
  transition: box-shadow 50ms, transform 50ms;
  ${elevation};
  margin: 2rem;
  display: inline-flex;
  background: ${p => p.theme.background};
`;

const elevations = [
  0,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
];
