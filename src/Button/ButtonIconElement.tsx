import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { ButtonStyleSettings } from './ButtonStyleSettings';

export interface ButtonIconElementStyledProps {
  iconLocation?: 'beforeLabel' | 'afterLabel' | 'featuredLeft';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const getIconSize = props =>
  rem(ButtonStyleSettings.IconSizes[props.size]);

const iconStyle = css`
  svg {
    width: ${getIconSize};
    height: ${getIconSize};
  }

  svg * {
    fill: currentColor;
  }
`;
const ButtonIconElementStyled = styled.span<any>`
  display: inline-flex;
  align-items: center;

  ${props =>
    props.iconLocation === 'afterLabel'
      ? `margin-left: ${props.size === 'lg' ? rem(8) : rem(4)}`
      : `margin-right: ${
          props.size === 'lg' ? rem(8) : rem(4)
        }`} ${iconStyle};
`;

const getFeaturedIconSizeCSS = props => {
  const thisButtonSize =
    ButtonStyleSettings.Sizes[props.size] ||
    ButtonStyleSettings.Sizes.md;

  return `
        width: ${thisButtonSize.minHeight};
        height: ${thisButtonSize.minHeight};
    `;
};

const FeaturedIconElement = styled.span`
    display: flex;
    position: absolute;
    left: ${rem(-1)};
    top: ${rem(-1)};
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.2);
    //box-shadow: 0 0 0 ${rem(1)} rgba(255,255,255,.2);
    ${getFeaturedIconSizeCSS}
    ${iconStyle}
`;

export const ButtonIconElement: SFC<ButtonIconElementStyledProps> = ({
  iconLocation,
  ...props
}) =>
  iconLocation === 'featuredLeft' ? (
    <FeaturedIconElement {...props} />
  ) : (
    <ButtonIconElementStyled iconLocation={iconLocation} {...props} />
  );
