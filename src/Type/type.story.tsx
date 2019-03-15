import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  HeaderPlusUltra,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
} from './index';
import { Story } from '../../.storybook/ui/Story';

storiesOf('Typography|Headlines', module).add('headlines', () => (
  <Story title="Typography" subTitle="Headlines" width="100%">
    <div style={{ padding: '2rem' }}>
      <HeaderPlusUltra>Header Plus Ultra</HeaderPlusUltra>

      <Header1>Header 1</Header1>
      <Header2>Header 2</Header2>
      <Header3>Header 3</Header3>
      <Header4>Header 4</Header4>
      <Header5>Header 5</Header5>
      <Header6>Header 6</Header6>
    </div>
    <div style={{ background: '#222', padding: '2rem' }}>
      <HeaderPlusUltra format="white">
        Header Plus Ultra
      </HeaderPlusUltra>

      <Header1 format="white">Header 1</Header1>
      <Header2 format="white">Header 2</Header2>
      <Header3 format="white">Header 3</Header3>
      <Header4 format="white">Header 4</Header4>
      <Header5 format="white">Header 5</Header5>
      <Header6 format="white">Header 6</Header6>
    </div>
  </Story>
));
