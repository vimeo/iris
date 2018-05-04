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

const getMaybeInlineButtonPadding = (props) => {
    if(props.inlineButton  && InputStyleSettings.size[props.inputSize]) {
        return InputStyleSettings.size[props.inputSize].buttonInputPaddingHorizontal;
    } else if (!props.inlineButton &&  InputStyleSettings.size[props.inputSize]) {
        return  InputStyleSettings.size[props.inputSize].paddingHorizontal;
    }
    
    return 0;
};

const getMaybeIconPadding = (props) => {
    if(props.hasIcon && InputStyleSettings.size[props.inputSize]) {
        return InputStyleSettings.size[props.inputSize].iconInputPaddingHorizontal;
    } else if (!props.hasIcon &&  InputStyleSettings.size[props.inputSize]) {
        return InputStyleSettings.size[props.inputSize].paddingHorizontal
    }
    
    return 0;
};

const InputStyled = styled<InputStyledProps, 'input'>('input')`
    display: inline-block;
    width: 100%;

    background-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].background.default : InputStyleSettings.color.light.background.default};
    color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.default : InputStyleSettings.color.light.text.default};
    font-family: ${VimeoStyleSettings.type.fontFamily.regular};

    height:${props => InputStyleSettings.size[props.inputSize] ? rem(InputStyleSettings.size[props.inputSize].height) : rem(InputStyleSettings.size.md.height)};
    padding: ${props =>  InputStyleSettings.size[props.inputSize] ? rem(InputStyleSettings.size[props.inputSize].paddingVertical) : rem(InputStyleSettings.size.md.paddingVertical)};
    padding-right: ${props => rem(getMaybeInlineButtonPadding(props))};
    padding-left: ${props => rem(getMaybeIconPadding(props))};

    font-size: ${props => InputStyleSettings.size[props.inputSize] ? rem(InputStyleSettings.size[props.inputSize].fontSize) : rem(InputStyleSettings.size.md.fontSize)};
    line-height: ${props => InputStyleSettings.size[props.inputSize] ? InputStyleSettings.size[props.inputSize].lineHeight / InputStyleSettings.size[props.inputSize].fontSize : InputStyleSettings.size.md.lineHeight / InputStyleSettings.size.md.fontSize};

    margin: 0 0 ${props => props.isInline ? 0 : rem(InputStyleSettings.marginBottom)} 0;

    border-color: ${props => InputStyleSettings.color[props.theme].border[props.format].default};
    border-width: ${rem(InputStyleSettings.border.borderSize)};
    border-style: ${InputStyleSettings.border.borderStyle};
    border-radius: ${rem(InputStyleSettings.border.borderRadius)};
    box-shadow: inset 0 0 0 0 #FFFFFF;

    transition: all ${InputStyleSettings.animationSpeed}ms ease-out;

    &:hover {
        border-color: ${props => InputStyleSettings.color[props.theme] && InputStyleSettings.color[props.theme].border[props.format] ?InputStyleSettings.color[props.theme].border[props.format].hover : InputStyleSettings.color.light.border.neutral};
    }

    &:focus {
        box-shadow: ${props => InputStyleSettings.color[props.theme] ? getInputBorderBoxShadow(InputStyleSettings.color[props.theme].border.focus) : getInputBorderBoxShadow(InputStyleSettings.color.light.border.focus)};
        border-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].border.focus : InputStyleSettings.color.light.border.focus};
        outline: 0;
    }

    &::placeholder {
        color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.placeholder : InputStyleSettings.color.light.text.placeholder};
    }

    &:read-only {
        color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.disabled : InputStyleSettings.color.light.text.disabled };
        background-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].background.disabled : InputStyleSettings.color.light.background.disabled};
    }

    &:disabled {
        color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].text.disabled : InputStyleSettings.color.light.text.disabled} !important;
        background-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].background.disabled : InputStyleSettings.color.light.background.disabled}!important;
        border-color: ${props => InputStyleSettings.color[props.theme] ? InputStyleSettings.color[props.theme].border.disabled : InputStyleSettings.color.light.border.disabled} !important;
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
                    label={label}
                    inputSize={size}
                    theme={theme}
                    type={type}
                />
                    {inlineButton}
            </InputWrapper>

    );
};

export default InputText;
