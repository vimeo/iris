import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Input as I } from './Input';

import { Story } from '../../../storybook';

import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

const componentName = 'Input Field';

storiesOf(`Components|inputs/Text/`, module)
  .add('Input (Text)', () => (
    <Story title={componentName}>
      <Input label="Input (Text)" />
      <Input
        label="Input (Text)"
        messages={{ post: 'post message' }}
      />
      <Input label="Input (Text)" pill />
      <Input
        label="Input (Text) error"
        status="negative"
        messages={{ error: 'This is an error.' }}
      />
      <InputWCC label="Input (Text) with character count" />
      <InputWCC
        label="Input (Text) with character count. Error overrides character count."
        status="negative"
        messages={{ error: 'This is an error.' }}
      />
    </Story>
  ))
  .add('Input (floating)', () => (
    <Story title={componentName}>
      <Input label="Input (Text)" floating />
      <Input
        label="Input (Text)"
        messages={{ post: 'post message' }}
        floating
      />
      <Input label="Input (Text)" floating pill />
    </Story>
  ));

const Input = styled(I)`
  margin-bottom: 2rem;
`;

const InputWCC = withCharacterCount(Input);
