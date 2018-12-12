import React, { ReactNode, SFC, HTMLProps } from 'react';
import { InputWrapper } from '../InputWrapper/InputWrapper';

import styled, { css } from 'styled-components';
import { getInputBaseStyles } from '../InputText/InputHelpers';
import { rem } from 'polished';
import { COLORS } from '../Legacy/';

export interface Props {
    disabled?: boolean;
    errorMsg?: ReactNode;
    format?: 'negative' | 'positive' | 'neutral';
    helperMsg?: ReactNode;
    id: string;
    label: string;
    preMessage?: ReactNode;
    showLabel?: boolean;
    theme?: 'default' | 'light' | 'dark';
}

export const TextArea: SFC<Props & HTMLProps<HTMLTextAreaElement>> = ({
    disabled,
    errorMsg,
    format = 'neutral',
    helperMsg,
    id,
    label,
    preMessage,
    ref: _,
    showLabel = true,
    theme = 'light',
    ...props
}) => (
    <InputWrapper
        showLabel={showLabel}
        disabled={disabled}
        errorMsg={errorMsg}
        format={format}
        helperMsg={helperMsg}
        label={label}
        labelForId={id}
        preMessage={preMessage}
        theme={theme === 'dark' ? 'dark' : 'light'}
    >
        <TextAreaStyled
            id={id}
            aria-label={!showLabel ? label : null}
            aria-invalid={format === 'negative'}
            disabled={disabled}
            hasIcon={format !== 'neutral'}
            theme={theme === 'dark' ? 'dark' : 'light'}
            format={format}
            {...props}
        />
    </InputWrapper>
);

const TextAreaStyled = styled.textarea<any>`
    ${getInputBaseStyles};
    width: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: ${rem(11)};
    font-size: ${rem(14)};
    line-height: ${14 / 16};
    height: auto;

    &:placeholder {
        color: ${COLORS.SoutherlySky};
    }

    ${props =>
        props.hasIcon &&
        css`
            padding-left: 2.25rem;
        `};
`;
