import React, { SFC, HTMLProps } from 'react';
import { SegmentedButtonProps } from './SegmentedButtonTypes';
import { SegmentedButtonSetOptionProps } from '../SegmentedButtonSet/SegmentedButtonSetTypes';
import {
    LabelStyled,
    InputStyled,
    OptionStyled,
} from './SegmentedButtonStyled';

export const SegmentedButtonSetButton: SFC<
    SegmentedButtonProps &
        SegmentedButtonSetOptionProps &
        HTMLProps<HTMLDivElement>
> = ({
    children,
    disabled,
    id,
    format = 'light',
    inputProps = { ref: false },
    name,
    optionLabel,
    // @ts-ignore
    ref: _,
    ...props
}) => {
    const {
        // @ts-ignore
        ref: _,
        ...inputPropsFiltered
    } = inputProps;

    return (
        <LabelStyled htmlFor={id}>
            <InputStyled
                {...inputPropsFiltered}
                name={name}
                id={id}
                type="radio"
                disabled={disabled}
            />
            <OptionStyled
                {...props}
                disabled={disabled}
                format={format}
                size="md"
            >
                {optionLabel}
            </OptionStyled>
        </LabelStyled>
    );
};
