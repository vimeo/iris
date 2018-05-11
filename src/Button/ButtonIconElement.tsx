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


const ButtonIconElementStyled = styled<ButtonIconElementStyledProps, 'span'>(
    'span'
)`
    display: inline-flex;

    align-items: center;

    ${props => `margin-${props.iconLocation === 'afterLabel' ? 'left' : 'right' }: ${props.size === 'lg' ? rem(8) : rem(4)};`}

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
