import React from 'react';
import styled from 'styled-components';

import { withCharacterCount } from './withCharacterCount';
import { TextArea } from '../TextArea/TextArea';

import { Story } from '../../../storybook';
import { Input } from '../../index';

export default { title: 'Utilties/Character Count' };

export function Common({ args }) {
  return (
    <Story title="Character Count">
      <InputWithCharacterCount
        {...args}
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
