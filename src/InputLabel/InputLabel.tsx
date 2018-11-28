import React, { SFC, HTMLProps } from 'react';
import styled from 'styled-components';
import InputLabelStateIcon from '../InputLabelStateIcon/InputLabelStateIcon';
import { Header6 } from '../Type';
import { InputStyleSettings } from '../InputText/InputHelpers';

export interface InputLabelProps {
    disabled?: boolean;
    element?: 'label' | 'legend';
    format?: 'negative' | 'positive' | 'neutral';
    theme?: 'default' | 'light' | 'dark';
}

export interface LabelStyledProps {
    disabled?: boolean;
    labelTheme?: 'light' | 'dark';
}

const Label: SFC<LabelStyledProps & HTMLProps<HTMLSpanElement>> = ({
    labelTheme: _,
    ...props
}) => <span {...props} />;

const LabelStyled = styled(Label)`
    display: inline-block;
    position: relative;
    color: ${props =>
        props.disabled
            ? InputStyleSettings.color[props.labelTheme].text.disabled
            : InputStyleSettings.color[props.labelTheme].text.default};
    ${props => (props.labelTheme === 'dark' ? 'font-weight: normal' : '')};
`;

const InputLabel: SFC<
    InputLabelProps &
        HTMLProps<HTMLLabelElement> &
        HTMLProps<HTMLHeadingElement>
> = ({
    children,
    disabled,
    element = 'label',
    format = 'neutral',
    theme = 'light',
    ref: _,
    ...props
}) => (
    <Header6 element={element} {...props}>
        <LabelStyled
            disabled={disabled}
            labelTheme={theme === 'default' ? 'light' : theme}
        >
            {children}
            {format !== 'neutral' && <InputLabelStateIcon format={format} />}
        </LabelStyled>
    </Header6>
);

export default InputLabel;
