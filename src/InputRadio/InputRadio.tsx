import React, { HTMLProps, SFC } from 'react';
import { Omit } from '../globals/js/type-helpers';
import { InputLabelInline } from '../InputLabelInline/InputLabelInline';
import { InputRadioProps } from './InputRadioTypes';
import {
    InputRadioWrapperStyled,
    InputRadioStyled,
    InputRadioOverlayStyled,
} from './InputRadioStyled';
import { RadioFocusOutline } from './InputRadioFocus';

export type Props = InputRadioProps &
    Omit<HTMLProps<HTMLInputElement>, 'label'>;

export const InputRadio: SFC<Props> = ({
    disabled,
    format = 'neutral',
    id,
    label,
    theme = 'default',
    ref: _,
    ...props
}) => (
    <InputRadioWrapperStyled theme={theme}>
        <InputLabelInline
            htmlFor={id}
            format={format}
            disabled={disabled}
            theme={theme}
        >
            <InputRadioStyled
                {...props}
                type="radio"
                id={id}
                disabled={disabled}
            />

            <InputRadioOverlayStyled theme={theme}>
                <RadioFocusOutline theme={theme} />
            </InputRadioOverlayStyled>
            {label}
        </InputLabelInline>
    </InputRadioWrapperStyled>
);
