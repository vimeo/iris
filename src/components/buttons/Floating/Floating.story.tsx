import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';
import { FloatingButton } from './Floating';

storiesOf(`Components|buttons/`, module).add(
  'Floating Button',
  () => (
    <Story title="Floating Button">
      <FloatingButton>Post a job</FloatingButton>
    </Story>
  ),
);
