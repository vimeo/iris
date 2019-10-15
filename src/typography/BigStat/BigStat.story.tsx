import React from 'react';
import { storiesOf } from '@storybook/react';

import { BigStat } from './BigStat';

import { Story } from '../../storybook';

storiesOf('Typography|Big Stat/', module).add('Big Stat', () => (
  <Story title="Big Stat" subTitle="BigStat" width="100%">
    <div style={{ padding: '2rem' }}>
      <BigStat>12.2k</BigStat>
    </div>
  </Story>
));
