import React from 'react';
import { storiesOf } from '@storybook/react';
import { Annotation } from './Annotation';

import { Header4 } from '../../../legacy';
import { Story } from '../../../storybook';

storiesOf(`components|Portals/`, module).add('Annotation', () => (
  <Story title="Annotation">
    <Annotation size="md" tooltipText="I am a tooltip">
      <Header4>Tooltip</Header4>
    </Annotation>
  </Story>
));
