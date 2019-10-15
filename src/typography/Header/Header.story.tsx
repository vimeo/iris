import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from './Header';

import { Story } from '../../storybook';

storiesOf('Typography|Headers/', module)
  .add('all', () => (
    <Story title="Headers" width="100%">
      <div style={{ padding: '2rem' }}>
        <Header size="plusUltra">Header Plus Ultra</Header>

        <Header size="1">Header 1</Header>
        <Header size="2">Header 2</Header>
        <Header size="3">Header 3</Header>
        <Header size="4">Header 4</Header>
        <Header size="5">Header 5</Header>
        <Header size="6">Header 6</Header>
        <Header size="7">Header 7</Header>
      </div>
    </Story>
  ))
  .add('Plus Ultra', () => (
    <Story title="Headers" width="100%">
      <div style={{ padding: '2rem' }}>
        <Header size="plusUltra">Header Plus Ultra</Header>
      </div>
    </Story>
  ))
  .add('thin', () => (
    <Story title="Headers" width="100%">
      <div style={{ padding: '2rem' }}>
        <Header size="1" variant="thin">
          Header 1
        </Header>
        <Header size="2" variant="thin">
          Header 2
        </Header>
        <Header size="3" variant="thin">
          Header 3
        </Header>
        <Header size="4" variant="thin">
          Header 4
        </Header>
        <Header size="5" variant="thin">
          Header 5
        </Header>
        <Header size="6" variant="thin">
          Header 6
        </Header>
        <Header size="7" variant="thin">
          Header 7
        </Header>
      </div>
    </Story>
  ));
