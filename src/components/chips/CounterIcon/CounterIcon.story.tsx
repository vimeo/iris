import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { CounterIcon as C } from './CounterIcon';
import { Story } from '../../../storybook';
import { Play, Collections } from '../../../icons';

const CounterIcon = styled(C)`
  margin: 0 0.5rem;
`;

storiesOf(`Components|chips/`, module).add('CounterIcon', () => (
  <Story title="Counter Icon">
    <CounterIcon icon={<Play />} title="Download Count">
      2.12K
    </CounterIcon>
    <CounterIcon icon={<Collections />} title="Play Count">
      100
    </CounterIcon>
  </Story>
));
