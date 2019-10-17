import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { withCharacterCount } from './withCharacterCount';
import { TextArea } from '../TextArea/TextArea';

import { Story } from '../../../storybook';
import { InputText } from '../../index';

storiesOf('Utilties|Character Count', module).add(
  'Character Count',
  () => (
    <Story title="Character Count">
      <InputWithCharacterCount
        id="someId1"
        label="Input (text) with character count"
      />
      <TextAreaWithCharacterCount
        id="someId2"
        label="TextArea with character count"
        warningThreshold={10}
      />
    </Story>
  ),
);

const TextAreaStyled = styled(TextArea)`
  min-height: 5rem;
`;

const InputWithCharacterCount = withCharacterCount(InputText);
const TextAreaWithCharacterCount = withCharacterCount(TextAreaStyled);
