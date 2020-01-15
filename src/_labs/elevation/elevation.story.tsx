import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

// import { contour } from '../Theme/themes';
import { elevation } from './elevation';

import { Story } from '../../storybook';

storiesOf(`Labs|Elevation`, module).add('Elevation', () => (
  <Story title="Annotation" width="100%">
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
    {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map(e => (
      <Box elevation={e}>{e}</Box>
    ))}
  </Story>
));

const label = 'Temperature';
const defaultValue = 500;
const options = {
  range: true,
  min: 0,
  max: 1000,
  step: 100,
};

const Box = styled.div<any>`
  width: 10rem;
  height: 10rem;
  border-radius: 0.25rem;
  transition: box-shadow 50ms, transform 50ms;
  ${elevation};
  margin: 2rem;
  display: inline-block;
  background: ${p => p.theme.background};
`;
