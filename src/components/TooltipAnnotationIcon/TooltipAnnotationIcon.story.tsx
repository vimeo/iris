import React from 'react';
import { storiesOf } from '@storybook/react';
import { TooltipAnnotationIcon } from './TooltipAnnotationIcon';
import { Header4 } from '../../legacy';

import { Story } from '../../storybook';

const componentName = 'Tooltip Annotation Icon';

storiesOf(`components|Tooltips`, module).add('Tooltip', () => (
  <Story title={componentName}>
    <TooltipAnnotationIcon size="md" tooltipText="I am a tooltip">
      <Header4>Tooltip</Header4>
    </TooltipAnnotationIcon>
  </Story>
));
