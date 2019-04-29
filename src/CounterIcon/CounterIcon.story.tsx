import React from 'react';
import { CounterIcon as C } from '../';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';
import { Play, Collections } from '../Icons';

const CounterIcon = styled(C)`
  margin: 0 0.5rem;
`;

storiesOf(`components|CounterIcon`, module).add('CounterIcon', () => (
  <Story title="Avatar">
    <CounterIcon icon={<Play />} counterTitle="Download Count (Dark)">
      2.12K
    </CounterIcon>
    <CounterIcon
      icon={<Collections />}
      counterTitle="Play Count (Alternative)"
    >
      100
    </CounterIcon>
  </Story>
));
