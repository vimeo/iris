import React, { SFC, HTMLProps } from 'react';

import { InputCheckboxProps } from './InputCheckboxTypes';
import {
    InputCheckboxWrapperStyled,
    InputCheckboxStyled,
    InputCheckboxLabelStyled,
    OverlayStyled,
    HiddenLabelStyled,
} from './InputCheckboxStyled';
import { CheckboxFocusBloop } from './InputCheckboxFocusBloop';

import InputWrapperInline from '../InputWrapperInline/InputWrapperInline';

const InputCheckbox: SFC<InputCheckboxProps & HTMLProps<HTMLDivElement>> = ({
    checkedStyle = 'default',
    disabled,
    errorMsg,
    format = 'neutral',
    helperMsg,
    hideLabel,
    id,
    label,
    theme = 'default',
    ref: _,
    ...filteredProps
}) => (
    <InputWrapperInline errorMsg={errorMsg} helperMsg={helperMsg} theme={theme}>
        <InputCheckboxWrapperStyled>
            <InputCheckboxLabelStyled
                htmlFor={id}
                format={format}
                disabled={disabled}
                fieldLevelErrors
                hideLabel={hideLabel}
                theme={theme}
            >
                <InputCheckboxStyled
                    {...filteredProps}
                    aria-label={hideLabel ? label : null}
                    type="checkbox"
                    id={id}
                    disabled={disabled}
                    theme={theme}
                />

                <OverlayStyled theme={theme} checkedStyle={checkedStyle}>
                    <CheckboxFocusBloop theme={theme} />
                </OverlayStyled>

                <HiddenLabelStyled hideLabel={hideLabel}>
                    {label}
                </HiddenLabelStyled>
            </InputCheckboxLabelStyled>
        </InputCheckboxWrapperStyled>
    </InputWrapperInline>
);

export default InputCheckbox;
