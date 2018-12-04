import React, { HTMLProps, SFC } from 'react';
import { Omit } from '../globals/js/type-helpers';
import { InputLabelInline } from '../InputLabelInline';
import { InputRadioProps } from './InputRadioTypes';
import {
    InputRadioWrapperStyled,
    InputRadioStyled,
    InputRadioOverlayStyled,
} from './InputRadioStyled';
import { RadioFocusBloop } from './InputRadioFocusBloop';

export type Props = InputRadioProps &
    Omit<HTMLProps<HTMLInputElement>, 'label'>;

const InputRadio: SFC<Props> = ({
    disabled,
    format = 'neutral',
    id,
    label,
    theme = 'default',
    ref: _,
    ...filteredProps
}) => (
    <InputRadioWrapperStyled theme={theme}>
        <InputLabelInline
            htmlFor={id}
            format={format}
            disabled={disabled}
            theme={theme}
        >
            <InputRadioStyled
                {...filteredProps}
                type="radio"
                id={id}
                disabled={disabled}
            />

            <InputRadioOverlayStyled theme={theme}>
                <RadioFocusBloop theme={theme} />
            </InputRadioOverlayStyled>
            {label}
        </InputLabelInline>
    </InputRadioWrapperStyled>
);

export default InputRadio;
