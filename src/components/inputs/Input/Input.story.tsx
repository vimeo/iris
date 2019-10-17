import React, { useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';
import { Story } from '../../../storybook';

const componentName = 'Input Field';

storiesOf(`Components|inputs/Text/`, module).add(
  'Input (Text)',
  () => (
    <Story title={componentName}>
      <Input label="Input (Text)" />
      <Input
        label="Input (Text)"
        messages={{ post: 'post message' }}
      />
    </Story>
  ),
);
