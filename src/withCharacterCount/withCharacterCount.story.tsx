import React from 'react';
import { storiesOf } from '@storybook/react';
import { withCharacterCounter as withCharacterCount } from './withCharacterCount';
import { TextArea } from '../TextArea/TextArea';
import { InputText } from '../InputText/InputText';
import styled from 'styled-components';
import { ParagraphMd } from '../Type';
import { Story } from '../../.storybook/ui/Story';

storiesOf('Utilties|Character Count', module).add(
  'Character Count',
  () => (
    <Story title="Character Count">
      <InputTextWithCharacterCount
        id="someId1"
        label="Input (text) with character count"
        maxCharacters={10}
        characterSingularString="character"
        characterPluralString="characters"
        helperMsg={
          <ParagraphMd>This is helpful information.</ParagraphMd>
        }
        defaultValue="hello"
      />
      <TextAreaWithCharacterCount
        id="someId2"
        label="TextArea with character count"
        maxCharacters={30}
        warningThreshold={10}
        characterSingularString="character"
        characterPluralString="characters"
      />
    </Story>
  ),
);

const TextAreaStyled = styled(TextArea)`
  max-width: 20rem;
  min-height: 5rem;
`;

const InputTextWithCharacterCount = withCharacterCount(InputText);
const TextAreaWithCharacterCount = withCharacterCount(TextAreaStyled);
