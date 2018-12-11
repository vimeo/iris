import React, { SFC } from 'react';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputMessageArea } from '../InputMessageArea/InputMessageArea';
import SuccessIcon from '../icons/checkmark.svg';
import AlertIcon from '../icons/circle-warning.svg';
import { Omit } from '../globals/js/type-helpers';
import {
    IconStyled,
    WrapperStyled,
    PositioningWrapperStyled,
    InputFieldWrapperStyled,
} from './InputWrapperStyled';

export interface InputWrapperProps
    extends Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'size'> {
    disabled?: boolean;
    errorMsg?: React.ReactNode;
    format?: 'negative' | 'positive' | 'neutral';
    helperMsg?: React.ReactNode;
    isInline?: boolean;
    label?: React.ReactNode;
    labelForId?: string;
    preMessage?: React.ReactNode;
    showLabel: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    theme?: 'light' | 'dark' | 'default';
}

export const InputWrapper: SFC<InputWrapperProps> = ({
    children,
    disabled,
    format = 'neutral',
    labelForId,
    errorMsg,
    helperMsg,
    isInline,
    label,
    preMessage,
    ref: _,
    showLabel = true,
    size = 'md',
    theme = 'light',
    ...props
}) => (
    <WrapperStyled
        {...props}
        theme={theme === 'default' ? 'light' : theme}
        isInline={isInline}
    >
        {showLabel && (
            <InputLabel
                disabled={disabled}
                htmlFor={labelForId}
                theme={theme === 'default' ? 'light' : theme}
            >
                {label}
            </InputLabel>
        )}

        <PositioningWrapperStyled>
            <InputFieldWrapperStyled>
                {children}
                {format !== 'neutral' && (
                    <IconStyled format={format} iconSize={size}>
                        {format === 'positive' ? (
                            <SuccessIcon />
                        ) : (
                            <AlertIcon />
                        )}
                    </IconStyled>
                )}
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
