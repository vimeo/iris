// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import {
    InputStyleSettings,
} from '../InputText/InputHelpers';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';
import InputLabel from '../InputLabel/InputLabel';
import InputMessageArea from '../InputMessageArea/InputMessageArea';
// @ts-ignore
import SuccessIcon from '../icons/checkmark.svg';
// @ts-ignore
import AlertIcon from '../icons/circle-warning.svg';
import {Omit} from '../globals/js/type-helpers';

export interface InputWrapperProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'size'> {
    disabled?: boolean,
    errorMsg?: React.ReactNode,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React.ReactNode,
    isInline?: boolean,
    label?: React.ReactNode,
    labelForId?: string,
    preMessage?: React.ReactNode,
    showLabel: boolean,
    size?: 'md' | 'lg' | 'xl',
    theme?: 'light' | 'dark' | 'default',
};

export interface WrapperStyledProps {
    isInline?: boolean,
    theme?: 'light' | 'dark',
}

const WrapperStyled = styled<WrapperStyledProps, 'div'>('div')`
    margin-bottom: ${props => props.isInline ? '0' : rem(InputStyleSettings.marginBottom)};
    color: ${props => InputStyleSettings.color[props.theme].text.default};
`;

const iconSlideKeyframes = keyframes`
        from {
            width: 0;
    
            opacity: 0;
        }
        to {
            width: ${rem(InputStyleSettings.size.md.iconSize)};
    
            opacity: 1;
        }
`;

const iconSlideKeyframesXL = keyframes`
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: ${rem(InputStyleSettings.size.xl.iconSize)};
            opacity: 1;
        }
`;

const getIconColor = props => {
    if (props.format === 'negative') {
        return VimeoStyleSettings.colors.uiColors.alertColor;
    }
    if (props.format === 'positive') {
        return VimeoStyleSettings.colors.uiColors.positiveColor;
    }

    return 'inherit';
};

export interface IconStyledProps {
    iconSize?: 'md' | 'lg' | 'xl',
    format?: 'negative' | 'positive' | 'neutral',
    theme?: 'light' | 'dark',
}

const IconStyled = styled<IconStyledProps, 'div'>('div')`
    color: ${getIconColor};
    position: absolute;
    top: 0;
    left: 0;

    height: ${props => rem(InputStyleSettings.size[props.iconSize].height)};
    padding: ${props => `${rem(InputStyleSettings.size[props.iconSize].iconWrapperPaddingVertical)} ${rem(InputStyleSettings.size[props.iconSize].iconWrapperPaddingHorizontal)}`};

    svg {
        width: ${props => rem(InputStyleSettings.size[props.iconSize].iconSize)};
        height: ${props => rem(InputStyleSettings.size[props.iconSize].iconSize)};

        animation-name: ${props => props.iconSize === 'xl' ? iconSlideKeyframesXL : iconSlideKeyframes}
        animation-duration: ${InputStyleSettings.animationSpeed}ms;
        animation-timing-function: ease-out;

        animation-fill-mode: forwards;

        * {
            fill: currentColor;
        }
    }
`;

const PositioningWrapperStyled = styled('div')`
    position: relative;
`;

const InputFieldWrapperStyled = styled('div')`
    // provides positional context for icons
    position: relative;

    padding: 0;
`;


const InputWrapper = ({
    children,
    disabled,
    format = 'neutral',
    labelForId,
    errorMsg,
    helperMsg,
    isInline,
    label,
    preMessage,
    ref:_,
    showLabel = true,
    size = 'md',
    theme = 'light',
    ...filteredProps
}: InputWrapperProps) => {

    // support deprecated 'default' theme as 'light'
    const themeDefaultSupport = theme === 'default' ? 'light' : theme;

    let fieldIcon;

    switch (format) {
        case 'negative':
            fieldIcon = <AlertIcon />;
            break;
        case 'positive' :
            fieldIcon = <SuccessIcon />;
            break;
        default:
            fieldIcon = null;
    }

    const labelElement = (
        <InputLabel
            disabled={disabled}
            htmlFor={labelForId}
            theme={themeDefaultSupport}
        >
            {label}
        </InputLabel>
    );

    const inputIcon = fieldIcon && (
            <IconStyled
                format={format}
                theme={themeDefaultSupport}
                iconSize={size}
            >
                {fieldIcon}
            </IconStyled>
    );


    return (
        <WrapperStyled
            {...filteredProps}
            theme={themeDefaultSupport}
            isInline={isInline}
        >

            {showLabel ? labelElement : null}
            <PositioningWrapperStyled>
                <InputFieldWrapperStyled>
                    {children}
                    {inputIcon}
                </InputFieldWrapperStyled>
                {preMessage}
                <InputMessageArea
                    errorMsg={errorMsg}
                    helperMsg={helperMsg}
                    theme={theme}
                />
            </PositioningWrapperStyled>
        </WrapperStyled>
    );
};

export default InputWrapper;
