import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';
import { FloatingButton } from './Floating';

storiesOf(`components|Buttons/`, module).add('Floating', () => (
  <Story title="Floating Button">
    <FloatingButton>Post a job</FloatingButton>
  </Story>
));
