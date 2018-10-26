import React from 'react';
import { storiesOf } from '@storybook/react';
import withCharacterCount from './withCharacterCount';
import TextArea from '../TextArea/';
import InputText from '../InputText';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphMd } from '../Type';

storiesOf('withCharacterCount', module).add(
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

// Storybook as currently configured has issues with JSX/SCSS component styles.
// This a rough copy of TextArea styles.
const TextAreaStyled = styled(TextArea)`
    display: inline-block;
    margin: 0 0 0.5rem 0;
    border-width: 0.0625rem;
    border-style: solid;
    border-radius: ${rem(3)};
    box-shadow: inset 0 0 0 0 #ffffff;
    transition: all 300ms ease-out;
    width: 100%;
    max-width: 20rem;
    min-height: 5rem;
    padding: 0.6875rem;
    font-size: ${rem(14)};
    line-height: 1.2;
    &:focus {
        outline: 0;
    }
`;

const InputTextWithCharacterCount = withCharacterCount(InputText);
const TextAreaWithCharacterCount = withCharacterCount(TextAreaStyled);
