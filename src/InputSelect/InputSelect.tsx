import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Omit } from '../globals/js/type-helpers';
import {
    getInputBaseStyles,
    InputProps,
} from '../InputText/InputHelpers';
import SelectWrapper, {ArrowIconWrapperWidth} from '../SelectWrapper/SelectWrapper';
//@ts-ignore
import ChevronIris from '../icons/chevron-down.svg';

export interface InputSelectProps extends InputProps, Omit<React.HTMLProps<HTMLSelectElement>, 'label' | 'size' | 'id'>  {
    icon?: React.ReactNode,
    options: Array<{label: string, value: string}>,
};

interface StyledSelectProps extends React.HTMLProps<HTMLSelectElement> {
    hasIcon: boolean;
    hasInlineIcon: boolean;
    format?: 'negative' | 'positive' | 'neutral';
    inputSize: 'sm' | 'md' | 'lg' | 'xl';
    theme: 'default' | 'light' | 'dark';
}

const StyledSelect = styled<StyledSelectProps, 'select'>('select')`
    ${getInputBaseStyles}

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    ${props => props.hasInlineIcon && `padding-left: ${rem(40)};`}

    &:-moz-focusring {
        color: transparent !important;
        text-shadow: 0 0 0 #000000 !important;
    }

    @supports ( -webkit-appearance: none ) or ( -moz-appearance: none ) or ( appearance: none ) {
        padding-right: ${rem(ArrowIconWrapperWidth)};
    }
`;

const InputSelect = ({
    children,
    disabled,
    errorMsg,
    format = 'neutral',
    helperMsg,
    icon,
    id,
    isInline,
    label,
    options,
    showLabel = true,
    size = 'md',
    theme = 'default',
    ref: _,
    ...filteredProps
}: InputSelectProps) => {

    const isNegative = format === 'negative';
    const ariaInvalid = isNegative;
    const hasStateIcon = isNegative || format === 'positive';

    let ariaLabel;

    if (!showLabel) {
        ariaLabel = label;
    }

    // Build options if there are options passed as an array
    const optionList = options ? options.map((_, i) => {
        const {
            label, // eslint-disable-line no-shadow
            ...optionProps
        } = _;
        return (<option {...optionProps} key={i}>{label}</option>);
    }): [];

    return (
            <SelectWrapper
                disabled={disabled}
                errorMsg= {errorMsg}
                format={format}
                helperMsg={helperMsg}
                icon={icon}
                id={id}
                isInline={isInline}
                label={label}
                showLabel={showLabel}
                size={size}
                theme={theme}
            >
                    <StyledSelect
                        {...filteredProps}
                        aria-label={ariaLabel}
                        aria-invalid={ariaInvalid}
                        children={optionList.length ? optionList : children}
                        disabled={disabled}
                        hasIcon={hasStateIcon}
                        hasInlineIcon={icon ? true : false}
                        id={id}
                        format={format}
                        inputSize={size}
                        theme={theme === 'dark' ? theme : 'light'}
                    />
            </SelectWrapper>
    );
};

export default InputSelect;
