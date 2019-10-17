import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';
import { Annotation } from './Annotation';
import { Header } from '../../../typography';

storiesOf(`Components|portals/`, module).add('Annotation', () => (
  <Story title="Annotation">
    <Annotation content="I am a tooltip">
      <Header size="3">Tooltip</Header>
    </Annotation>
  </Story>
));
