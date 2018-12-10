import React from 'react';
import { storiesOf } from '@storybook/react';
import withCharacterCount from './withCharacterCount';
import { TextArea } from '../TextArea/';
import { InputText } from '../InputText/';
import styled from 'styled-components';
import { ParagraphMd } from '../Type';

storiesOf('utilties/withCharacterCount', module).add(
    'default',
    () => (
        <div>
            <InputTextWithCharacterCount
                id="someId1"
                label="Input (text) with character count"
                maxCharacters={10}
                characterSingularString="character"
                characterPluralString="characters"
                helperMsg={
                    <ParagraphMd>This is helpful information.</ParagraphMd>
                }
            />
            <TextAreaWithCharacterCount
                id="someId2"
                label="TextArea with character count"
                maxCharacters={30}
                warningThreshold={10}
                characterSingularString="character"
                characterPluralString="characters"
            />
        </div>
    ),
    {
        info: {
            inline: true,
            propTables: [withCharacterCount],
        },
        options: {
            name: 'Iris',
            url: '#',
        },
    },
);

const TextAreaStyled = styled<any, any>(TextArea)`
    max-width: 20rem;
    min-height: 5rem;
`;

const InputTextWithCharacterCount = withCharacterCount(InputText);
const TextAreaWithCharacterCount = withCharacterCount(TextAreaStyled);
