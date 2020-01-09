import React from 'react';
import { storiesOf } from '@storybook/react';

import { Slider } from './Slider';

import { Story } from '../../../storybook';

storiesOf(`Components|inputs/`, module).add('Slider', () => (
  <Story title="Slider">
    <Slider />
    <Slider editableLabel min={10} max={70} />
    <Slider
      range
      initialValues={[20, 50]}
      formatter={value => value + 'm'}
    />
    <Slider editableLabel range />
  </Story>
));
