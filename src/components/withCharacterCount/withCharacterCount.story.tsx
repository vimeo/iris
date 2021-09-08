import React from 'react';
import styled from 'styled-components';

import { withCharacterCount } from './withCharacterCount';
import { TextArea } from '../TextArea/TextArea';

import { Story } from '../../storybook';
import { Input } from '../Input/Input';

export default { title: 'utilties/withCharacterCount' };

export function Common() {
  return (
    <Story title="Character Count">
      <InputWithCharacterCount
        id="someId1"
        label="Input (text) with character count"
      />
      <InputWithCharacterCount
        id="someId2"
        defaultValue="lorem"
        label="Input (text) with character count"
      />
      <TextAreaWithCharacterCount
        id="someId2"
        label="TextArea with character count"
        warningThreshold={10}
      />
    </Story>
  );
}

const TextAreaStyled = styled(TextArea)`
  min-height: 5rem;
`;

const InputWithCharacterCount = withCharacterCount(Input);
const TextAreaWithCharacterCount = withCharacterCount(TextAreaStyled);
