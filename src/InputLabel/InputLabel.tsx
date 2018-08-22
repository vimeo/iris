import React, { SFC, HTMLProps } from 'react';
import styled from 'styled-components';
import InputLabelStateIcon from '../InputLabelStateIcon/InputLabelStateIcon';
import { Header6 } from '../Type';
import {
    InputStyleSettings,
} from '../InputText/InputHelpers';

export interface InputLabelProps {
    disabled?: boolean,
    element?: 'label' | 'legend',
    format?: 'negative' | 'positive' | 'neutral',
    theme?: 'default' | 'light' | 'dark',
};

export interface LabelStyledProps {
    disabled?: boolean,
    labelTheme?: 'light' | 'dark',
};

const Label: SFC <
    LabelStyledProps &
    HTMLProps<HTMLSpanElement>
> = ({ 
    labelTheme: _,
    ...props
}) => (
    <span {...props} />
);

const LabelStyled = styled(Label)`
    display: inline-block;
    position: relative;
    color: ${props => props.disabled ? InputStyleSettings.color[props.labelTheme].text.disabled : InputStyleSettings.color[props.labelTheme].text.default};
    ${props => props.labelTheme === 'dark' ? 'font-weight: normal' : ''}
`


const InputLabel: SFC <
    InputLabelProps &
    HTMLProps<HTMLLabelElement> &
    HTMLProps<HTMLHeadingElement>
> = (props) => {

    // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
    const {
        children,
        disabled,
        element = 'label',
        format = 'neutral',
        theme = 'light',
        ref:_,
        ...filteredProps
    } = props;

    // support deprecated 'default' theme as 'light'
    const themeDefaultSupport = theme === 'default'
        ? 'light'
        : theme;

    const Icon = (
        <InputLabelStateIcon
            format={format}
        />
    );

    return (
        <Header6
            element={element}
            {...filteredProps}
        >
            <LabelStyled
                disabled={disabled}
                labelTheme={themeDefaultSupport}
            >
                {children}
                {format !== 'neutral' ? Icon : null}
            </LabelStyled>
        </Header6>
    );
};

export default InputLabel;
