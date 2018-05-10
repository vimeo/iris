import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ButtonStyleSettings } from './ButtonHelpers';
import { Omit } from '../globals/js/type-helpers';
export interface ButtonIconElementStyledProps
    extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    iconLocation?: 'beforeLabel' | 'afterLabel';
    size: 'xs' | 'sm' | 'md' | 'lg';
}

const getIconSize = props => rem(ButtonStyleSettings.IconSizes[props.size]);
const getIconMargin = props => (props.size === 'lg' ? rem(8) : rem(4));
const getMarginDirection = props =>
    props.iconLocation === 'beforeLabel' ? 'right' : 'left';

const ButtonIconElementStyled = styled<ButtonIconElementStyledProps, 'span'>(
    'span'
)`
    display: inline-flex;

    align-items: center;

    ${props => props.iconLocation ? `margin-${getMarginDirection}: ${getIconMargin};` : ''}

    svg {
        width: ${getIconSize};
        height: ${getIconSize};
    }
    
    svg * {
        fill: currentColor;
    }
    
`;

const ButtonIconElement: React.SFC<ButtonIconElementStyledProps> = ({
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {
    return <ButtonIconElementStyled {...filteredProps} />;
};

export default ButtonIconElement;
