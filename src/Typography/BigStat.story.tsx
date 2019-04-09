import React from 'react';
import { storiesOf } from '@storybook/react';
import { BigStat } from './BigStat';
import { Story } from '../../.storybook/ui/Story';

storiesOf('Typography|BigStat', module)
  .add('light', () => (
    <Story title="Typography" subTitle="BigStat" width="100%">
      <div style={{ padding: '2rem' }}>
        <BigStat>12.2k</BigStat>
      </div>
    </Story>
  ))
  .add('dark', () => (
    <Story title="Typography" subTitle="BigStat" width="100%">
      <div style={{ background: '#222', padding: '2rem' }}>
        <BigStat theme="dark">12.2k</BigStat>
      </div>
    </Story>
  ));
