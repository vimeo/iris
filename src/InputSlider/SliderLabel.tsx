import React, { SFC } from 'react';
import styled from 'styled-components';
import { getSliderThemeColors } from './InputSliderHelpers';
import { rem, rgba } from 'polished';
import { COLORS } from '../Legacy/';

export interface SliderLabelProps {
    editable: boolean;
    value: number;
    id: string;
    format: 'dark' | 'light';
    onUserInput: (value) => void;
}

interface LabelWrapperStyledProps {
    format: 'dark' | 'light';
    isDisabled: boolean;
}

const LabelWrapper = styled<LabelWrapperStyledProps, 'div'>('div')`
    background: ${props => getSliderThemeColors(props.format).labelBackground};
    width: ${rem(60)};
    height: ${rem(34)};
    color: ${props => getSliderThemeColors(props.format).labelColor};
    text-align: center;
    padding: ${props => (props.isDisabled ? 0 : rem(2))};
    border-radius: ${rem(3)};
    margin-top: ${props => (props.isDisabled ? rem(2) : 0)};

    box-shadow: ${props =>
        props.format === 'dark'
            ? `0 0 ${rem(10)} 0 rgba(0, 0, 0, 0.3334);`
            : `0 0 ${rem(4)} 0 rgba(0, 0, 0, 0.1667);`};
`;
const LabelStyled = styled.label`
    width: 100%;
    height: 100%;
`;

const commonLabelStyles = props => {
    return `
    width: 100%;
    height: 100%;
    text-align: center;
    background: transparent;
    font-size: ${rem(14)};
    line-height: ${rem(28)};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    border-radius: ${rem(3)};
    color: ${getSliderThemeColors(props.format).labelColor};
`;
};

const LabelValueStyled = styled<LabelWrapperStyledProps, 'label'>('label')`
    ${props => commonLabelStyles(props)};
`;

const LabelInputStyled = styled<LabelWrapperStyledProps, 'input'>('input')`
    ${commonLabelStyles};
    border: ${props =>
        props.format === 'dark'
            ? `${rem(1)} solid ${rgba(COLORS.White, 0.33)}`
            : `${rem(1)} solid ${rgba(COLORS.White, 0.66)}`};
    &:hover {
        cursor: pointer;
        background-color: ${props =>
            getSliderThemeColors(props.format).labelHoverBackground};
    }
    &:focus {
        outline: none;
        cursor: text;
        border: ${rem(2)} solid ${COLORS.VimeoBlueDarkened};
        background: ${COLORS.White};
        color: ${COLORS.AstroGranite};
    }
`;

export const SliderLabel: SFC<SliderLabelProps> = ({
    editable,
    value,
    id,
    format,
    onUserInput,
    ...props
}) => {
    const updateValue = e => {
        const newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue)) {
            e.preventDefault();
            return;
        }
        if (e.keyCode === 13) {
            onUserInput(newValue);
        }
    };

    const inputProps = {
        type: 'text',
        disabled: editable ? false : true,
        id,
        onKeyUp: updateValue,
        defaultValue: String(value),
        format,
        isDisabled: editable ? false : true,
    };
    return (
        <LabelWrapper
            {...props}
            format={format}
            isDisabled={inputProps.disabled}
        >
            {editable ? (
                <LabelStyled htmlFor={id} key={value}>
                    <LabelInputStyled {...inputProps} />
                </LabelStyled>
            ) : (
                <LabelValueStyled
                    format={format}
                    isDisabled={inputProps.disabled}
                >
                    {value}
                </LabelValueStyled>
            )}
        </LabelWrapper>
    );
};
