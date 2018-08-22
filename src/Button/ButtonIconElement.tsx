import React, { SFC, HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { ButtonStyleSettings } from './ButtonStyleSettings';
import { Omit } from '../globals/js/type-helpers';

export interface ButtonIconElementStyledProps
    extends Omit<HTMLProps<HTMLSpanElement>, 'size'> {
    iconLocation?: 'beforeLabel' | 'afterLabel' |'featuredLeft';
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const getIconSize = props => rem(ButtonStyleSettings.IconSizes[props.size]);

const iconStyle = css`
    svg {
        width: ${getIconSize};
        height: ${getIconSize};
    }

    svg * {
        fill: currentColor;
    }
`;
const ButtonIconElementStyled = styled<ButtonIconElementStyledProps, 'span'>('span')`
    display: inline-flex;
    align-items: center;

    ${props => props.iconLocation === 'afterLabel' 
        ? `margin-left: ${props.size === 'lg'
            ? rem(8)
            : rem(4)}`
        : `margin-right: ${props.size === 'lg'
            ? rem(8)
            : rem(4)}`}

    ${iconStyle}
`;

const getFeaturedIconSizeCSS = props => {
    const thisButtonSize = ButtonStyleSettings.Sizes[props.size] || ButtonStyleSettings.Sizes.md;

    return `
        width: ${thisButtonSize.minHeight};
        height: ${thisButtonSize.minHeight};
    `;
};

interface FeaturedIconElementProps {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const featuredIconBGColor = 'rgba(255,255,255,.2)';

const FeaturedIconElement = styled<FeaturedIconElementProps, 'span'>('span')`
    display: flex;
    position: absolute;
    left: ${rem(-1)};
    top: ${rem(-1)};
    align-items: center;
    justify-content: center;
    background: ${featuredIconBGColor};
    //box-shadow: 0 0 0 ${rem(1)} ${featuredIconBGColor};
    ${getFeaturedIconSizeCSS}
    ${iconStyle}
`;

const ButtonIconElement: SFC<ButtonIconElementStyledProps> = ({
    iconLocation,
    ref: _,// filter out ref from styled component
    ...filteredProps
}) => iconLocation === 'featuredLeft'
    ? <FeaturedIconElement {...filteredProps} />
    : <ButtonIconElementStyled iconLocation={iconLocation} {...filteredProps} />;

export default ButtonIconElement;
