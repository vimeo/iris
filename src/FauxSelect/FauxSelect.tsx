import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Omit } from '../globals/js/type-helpers';
import { getInputBaseStyles, InputProps } from '../InputText/InputHelpers';
import TruncatedTextWrapper from '../TruncatedTextWrapper';
import { ArrowIconWrapperWidth } from '../SelectWrapper/SelectWrapper';

export interface FauxSelectProps
    extends InputProps,
        Omit<React.HTMLProps<HTMLButtonElement>, 'label' | 'size' | 'id'> {
    /**
     * This string should explain what clicking this will do since this is not a native select. e.g. "Click to change update your privacy options"
     */
    a11yLabel: string;
    /**
     * Make the select appear to be disabled
     */
    disabled?: boolean;
    /**
     * This behaves like all other input formats
     */
    format?: 'negative' | 'positive' | 'neutral';
    /**
     * Set to true if the select has an overlayed icon (eg credit card logo)
     */
    hasInlineIcon?: boolean;
    /**
     * This behaves like all other input sizes
     */
    inputSize: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * This behaves like all other input themes
     */
    theme: 'default' | 'light' | 'dark';
}

export interface FauxSelectStyledProps
    extends Omit<FauxSelectProps, 'a11yLabel'> {
    hasIcon?: boolean;
    hasInlineIcon?: boolean;
}

const FauxSelectStyled = styled<FauxSelectStyledProps, 'button'>('button')`
    ${getInputBaseStyles}
    ${props => props.hasInlineIcon && `padding-left: ${rem(40)};`}
    padding-right: ${rem(ArrowIconWrapperWidth)};

    display: inline-flex;
    text-align: left;

    width: 100%;

`;

const FauxSelect: SFC<FauxSelectProps> = ({
    a11yLabel,
    children,
    disabled,
    format = 'neutral',
    hasInlineIcon,
    isInline,
    size = 'md',
    theme = 'default',
    ref: _,
    ...filteredProps
}) => {
    const hasStateIcon = format === 'negative' || format === 'positive';

    return (
        <FauxSelectStyled
            {...filteredProps}
            aria-label={a11yLabel}
            role="listbox"
            disabled={disabled}
            hasIcon={hasStateIcon}
            hasInlineIcon={hasInlineIcon}
            isInline={isInline}
            format={format}
            inputSize={size}
            theme={theme === 'dark' ? theme : 'light'}
        >
            <TruncatedTextWrapper>{children}</TruncatedTextWrapper>
        </FauxSelectStyled>
    );
};

export default FauxSelect;
