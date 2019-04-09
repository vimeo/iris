import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header';
import { Story } from '../../.storybook/ui/Story';

storiesOf('Typography|Header', module)
  .add('light', () => (
    <Story title="Typography" subTitle="Headlines" width="100%">
      <div style={{ padding: '2rem' }}>
        <Header size="plusUltra">Header Plus Ultra</Header>

        <Header size="1">Header 1</Header>
        <Header size="1" variant="thin">
          Header 1 Thin
        </Header>

        <Header size="2">Header 2</Header>
        <Header size="3">Header 3</Header>
        <Header size="4">Header 4</Header>
        <Header size="5">Header 5</Header>
        <Header size="6">Header 6</Header>
        <Header size="7">Header 7</Header>
      </div>
    </Story>
  ))
  .add('dark', () => (
    <Story title="Typography" subTitle="Headlines" width="100%">
      <div style={{ background: '#222', padding: '2rem' }}>
        <Header size="plusUltra" theme="dark">
          Header Plus Ultra
        </Header>

        <Header size="1" theme="dark">
          Header 1
        </Header>
        <Header size="1" variant="thin" theme="dark">
          Header 1 Thin
        </Header>

        <Header size="2" theme="dark">
          Header 2
        </Header>
        <Header size="3" theme="dark">
          Header 3
        </Header>
        <Header size="4" theme="dark">
          Header 4
        </Header>
        <Header size="5" theme="dark">
          Header 5
        </Header>
        <Header size="6" theme="dark">
          Header 6
        </Header>
        <Header size="7" theme="dark">
          Header 7
        </Header>
      </div>
    </Story>
  ));
