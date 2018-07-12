import React from 'react';
import styled from 'styled-components';
import { getSliderThemeColors } from './InputSliderHelpers';
import { rem, rgba } from 'polished';
import COLORS from '../globals/js/constants/COLORS';

export interface SliderLabelProps {
    editable: boolean;
    value: number;
    id: string;
    format: 'dark' | 'light';
    onUserInput: (value) => void;
}

interface LabelWrapperStyledProps {
    format: 'dark' | 'light';
}

const LabelWrapper = styled<LabelWrapperStyledProps, 'div'>('div')`
    background: ${props => getSliderThemeColors(props.format).labelBackground};
    width: ${rem(60)};
    height: ${rem(34)};
    color: ${props => getSliderThemeColors(props.format).labelColor};
    text-align: center;
    padding: ${rem(2)};
    border-radius: ${rem(2)};
`;
const LabelStyled = styled.label`
    width: 100%;
    height: 100%;
`;

const LabelInputStyled = styled<LabelWrapperStyledProps, 'input'>('input')`
    width: 100%;
    height: 100%;
    text-align: center;
    border: ${props =>
        props.format == 'dark'
            ? `${rem(1)} solid ${rgba(COLORS.White, 0.33)}`
            : `${rem(1)} solid ${rgba(COLORS.White, 0.66)}`};
    border-radius: ${rem(2)};
    color: ${props => getSliderThemeColors(props.format).labelColor};
    background: transparent;
    &:not(:disabled) {
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
    }
`;

const SliderLabel: React.SFC<SliderLabelProps> = ({
    editable,
    value,
    id,
    format,
    onUserInput,
    ...filteredProps
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
        id: id,
        onKeyUp: updateValue,
        onChange: () => {},
        defaultValue: String(value),
        format: format,
    };
    return (
        <LabelWrapper {...filteredProps} format={format}>
            <LabelStyled htmlFor={id} key={value}>
                <LabelInputStyled {...inputProps} />
            </LabelStyled>
        </LabelWrapper>
    );
};

export default SliderLabel;
