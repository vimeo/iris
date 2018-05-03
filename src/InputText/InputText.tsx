import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import InputWrapper from '../InputWrapper/InputWrapper';
import {
    getInputBorderBoxShadow,
    InputProps,
    InputStyleSettings,
} from './InputHelpers';

export interface InputTextProps extends InputProps {
    inlineButton?: React.ReactNode,
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' |'url',
};

export interface InputStyledProps extends InputTextProps {
    hasIcon?: boolean,
    inputSize: 'md' | 'lg' | 'xl',
};

const InputStyled = styled<InputStyledProps, 'input'>('input')`
    display: inline-block;
    width: 100%;

    background-color: ${props => InputStyleSettings.color[props.theme].background.default};
    color: ${props => InputStyleSettings.color[props.theme].text.default};
    font-family: ${VimeoStyleSettings.type.fontFamily.regular};

    height:${props => InputStyleSettings.size[props.inputSize] ? rem(InputStyleSettings.size[props.inputSize].height) : rem(InputStyleSettings.size.md.height)};
    padding: ${props => rem(InputStyleSettings.size[props.inputSize].paddingVertical)};
    padding-right: ${props => rem(props.inlineButton ? InputStyleSettings.size[props.inputSize].buttonInputPaddingHorizontal : InputStyleSettings.size[props.inputSize].paddingHorizontal)};
    padding-left: ${props => rem(props.hasIcon ? InputStyleSettings.size[props.inputSize].iconInputPaddingHorizontal : InputStyleSettings.size[props.inputSize].paddingHorizontal)};

    font-size: ${props => rem(InputStyleSettings.size[props.inputSize].fontSize)};
    line-height: ${props => InputStyleSettings.size[props.inputSize].lineHeight / InputStyleSettings.size[props.inputSize].fontSize};

    margin: 0 0 ${props => props.isInline ? 0 : rem(InputStyleSettings.marginBottom)} 0;

    border-color: ${props => InputStyleSettings.color[props.theme].border[props.format].default};
    border-width: ${rem(InputStyleSettings.border.borderSize)};
    border-style: ${InputStyleSettings.border.borderStyle};
    border-radius: ${rem(InputStyleSettings.border.borderRadius)};
    box-shadow: inset 0 0 0 0 #FFFFFF;

    transition: all ${InputStyleSettings.animationSpeed}ms ease-out;

    &:hover {
        border-color: ${props => InputStyleSettings.color[props.theme].border[props.format].hover};
    }

    &:focus {
        box-shadow: ${props => getInputBorderBoxShadow(InputStyleSettings.color[props.theme].border.focus)};
        border-color: ${props => InputStyleSettings.color[props.theme].border.focus};
        outline: 0;
    }

    &::placeholder {
        color: ${props => InputStyleSettings.color[props.theme].text.placeholder};
    }

    &:read-only {
        color: ${props => InputStyleSettings.color[props.theme].text.disabled};
        background-color: ${props => InputStyleSettings.color[props.theme].background.disabled};
    }

    &:disabled {
        color: ${props => InputStyleSettings.color[props.theme].text.disabled} !important;
        background-color: ${props => InputStyleSettings.color[props.theme].background.disabled}!important;
        border-color: ${props => InputStyleSettings.color[props.theme].border.disabled} !important;
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
    ref: _,
    size = 'md',
    type = 'text',
    ...filteredProps
}) => {

    const isNegative = format === 'negative';
    const ariaInvalid = isNegative;
    const hasIcon = isNegative || format === 'positive';
    // support deprecated 'default' theme as 'light'
    const themeDefaultSupport = theme === 'default' ? 'light' : theme;

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
                    label={label}
                    inputSize={size}
                    theme={themeDefaultSupport}
                    type={type}
                />
                    {inlineButton}
            </InputWrapper>

    );
};

export default InputText;
