import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { ButtonProps } from '../Button/ButtonTypes';
import { ButtonStyleSettings } from '../Button/ButtonStyleSettings';
import {
  ButtonStyled as B,
  ButtonLabelStyled,
} from '../Button/ButtonStyled';

interface SocialIconElementProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const ButtonStyled = styled(B)`
  border-width: 0px;
`;

const getIconElementSizeCSS = props => {
  const thisButtonSize =
    ButtonStyleSettings.Sizes[props.size] ||
    ButtonStyleSettings.Sizes.md;

  return `
        width: ${thisButtonSize.minHeight};
        height: ${thisButtonSize.minHeight};
    `;
};

const SocialIconElement = styled.span<SocialIconElementProps>`
  display: flex;
  position: absolute;
  left: 0;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: solid ${rem(2)};
  border-radius: ${rem(4)};
  border-color: inherit;

  ${getIconElementSizeCSS}
`;

export const SocialButtonWrapper: SFC<ButtonProps> = ({
  children,
  icon,
  autoWidth = 'sm',
  size = 'md',
  customFormat,
  ...props
}) => (
  <ButtonStyled
    autoWidth={autoWidth}
    hasFeaturedIcon={true}
    size={size}
    customFormat={customFormat}
    format="primary"
    {...props}
  >
    <SocialIconElement size={size}>{icon}</SocialIconElement>
    <ButtonLabelStyled>{children}</ButtonLabelStyled>
  </ButtonStyled>
);
