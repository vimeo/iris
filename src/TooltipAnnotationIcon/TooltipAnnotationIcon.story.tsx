import React from 'react';
import { storiesOf } from '@storybook/react';
import { TooltipAnnotationIcon } from './TooltipAnnotationIcon';
import { Header4 } from '../Type';

import { Story } from '../../.storybook/Story';

const componentName = 'Tooltip Annotation Icon';

storiesOf(`components/`, module).add('Tooltip', () => (
  <Story title={componentName}>
    <TooltipAnnotationIcon size="md" tooltipText="I am a tooltip">
      <Header4>Tooltip</Header4>
    </TooltipAnnotationIcon>
  </Story>
));
