import React from 'react';
import styled  from 'styled-components';
import InputWrapper from '../InputWrapper/InputWrapper';
import {
    getInputBaseStyles, 
    InputProps,
    InputStyledProps,
    InputStyleSettings,
} from './InputHelpers';
import { Omit } from '../globals/js/type-helpers';


export interface InputTextProps extends InputProps, Omit<React.HTMLProps<HTMLInputElement>, 'label' | 'size' | 'id'> {
    inlineButton?: React.ReactNode,
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' |'url',
};

export interface InputTextStyledProps extends InputStyledProps {
    inlineButton?: React.ReactNode,
};

const InputStyled = styled<InputTextStyledProps, 'input'>('input')`
    ${getInputBaseStyles}
    &:read-only {
        color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.disabled : InputStyleSettings.color.light.text.disabled };
        background-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].background.disabled : InputStyleSettings.color.light.background.disabled};
    }
`

const InputText:React.SFC<InputTextProps>  = ({
    disabled,
    errorMsg,
    format = 'neutral',
    isInline,
    helperMsg,
    inlineButton,
    label,
    id,
    preMessage,
    showLabel = true,
    theme = 'light',
    size = 'md',
    type = 'text',
    ref: _,
    ...filteredProps
}) => {

    const isNegative = format === 'negative';
    const ariaInvalid = isNegative;
    const hasIcon = isNegative || format === 'positive';
    // support deprecated 'default' theme as 'light'
    const themeDefaultSupport = theme === 'default' ? 'light' : theme;
    // Protect against invalid props that are needed for style look up.

    return (
            <InputWrapper
                showLabel={showLabel}
                disabled={disabled}
                errorMsg={errorMsg}
                format={format}
                helperMsg = {helperMsg}
                label = {label}
                labelForId = {id}
                isInline = {isInline}
                preMessage={preMessage}
                size={size}
                theme={themeDefaultSupport}
            >
                <InputStyled
                    {...filteredProps}
                    aria-invalid={ariaInvalid}
                    disabled={disabled}
                    format={format}
                    hasIcon={hasIcon}
                    id={id}
                    inlineButton={inlineButton}
                    isInline={isInline}
                    inputSize={size}
                    theme={theme}
                    type={type}
                />
                    {inlineButton}
            </InputWrapper>

    );
};

export default InputText;
