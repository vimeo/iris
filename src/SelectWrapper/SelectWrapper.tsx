import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Omit } from '../globals/js/type-helpers';
import { InputProps, InputStyleSettings } from '../InputText/InputHelpers';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import ChevronIris from '../icons/chevron-down.svg';

export interface SelectWrapperProps
    extends InputProps,
        Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'size' | 'id'> {
    /**
     * Use to pass an inline icon over the select, for example a credit card logo
     */
    icon?: React.ReactNode;
}

export const ArrowIconSize = 24;
export const ArrowIconWrapperWidth = 36;

const WrapperStyled = styled.div`
    position: relative;
`;

const IconWrapperStyled = styled.div`
    position: absolute;
    top: 50%;
    left: ${rem(12)};

    transform: translateY(-50%);

    svg {
        width: ${rem(20)};
    }
`;

const getArrowColor = ({ disabled, format, theme }) => {
    let color = InputStyleSettings.color.light.text.default;

    if (!disabled) {
        if (format === 'neutral' && theme === 'dark') {
            color = InputStyleSettings.color.dark.text.default;
        }

        if (format === 'positive') {
            color = InputStyleSettings.color.light.border.positive.default;
        }

        if (format === 'negative') {
            color = InputStyleSettings.color.light.border.negative.default;
        }
    } else {
        color = InputStyleSettings.color.light.text.disabled;
    }

    return `fill: ${color};`;
};

interface ArrowWrapperStyledProps {
    disabled: boolean;
    format: 'negative' | 'positive' | 'neutral';
    theme: 'default' | 'light' | 'dark';
}

const ArrowWrapperStyled = styled.div<ArrowWrapperStyledProps>`
    display: none;
    @supports (appearance: none) {
        display: flex;
        position: absolute;
        top: 50%;
        right: ${rem(4)};

        width: ${rem(ArrowIconWrapperWidth)};

        justify-content: center;
        align-items: center;

        transform: translateY(-50%);

        pointer-events: none;

        svg {
            transform: translateY(-0.25rem);
            width: ${rem(ArrowIconSize)};
            height: ${rem(ArrowIconSize)};

            * {
                ${getArrowColor};
            }
        }
    }
`;

export const SelectWrapper: SFC<SelectWrapperProps> = ({
    children,
    disabled,
    errorMsg,
    format = 'neutral',
    helperMsg,
    icon,
    id,
    isInline,
    label,
    showLabel = true,
    size = 'md',
    theme = 'default',
    ref: _,
    ...props
}) => (
    <InputWrapper
        {...props}
        showLabel={showLabel}
        disabled={disabled}
        errorMsg={errorMsg}
        format={format}
        helperMsg={helperMsg}
        label={label}
        labelForId={id}
        isInline={isInline}
        size={size}
        theme={theme}
    >
        <WrapperStyled>
            {icon && <IconWrapperStyled>{icon}</IconWrapperStyled>}
            {children}
            <ArrowWrapperStyled
                format={format}
                disabled={disabled}
                theme={theme}
            >
                <ChevronIris />
            </ArrowWrapperStyled>
        </WrapperStyled>
    </InputWrapper>
);
