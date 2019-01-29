import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { BadgeProps } from './BadgeTypes';
import { badgeColorsCSS, badgeSizeCSS } from './BadgeStyleSettings';

const BadgeVariableElement: SFC<BadgeProps> = ({ href, ...rest }) =>
  href ? <a href={href} {...rest} /> : <span {...rest} />;

export const BadgeStyled = styled<BadgeProps, any>(
  BadgeVariableElement,
)`
  display: inline-block;

  margin: ${rem(-2)} 0.5rem 0 0.313rem;
  padding: ${rem(3)} ${rem(4)};

  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: ${rem(9)};
  font-weight: 700;
  line-height: 1.2;

  border-radius: ${rem(2)};
  text-shadow: none;

  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  letter-spacing: 0.02rem;
  text-transform: uppercase;

  ${props => badgeSizeCSS(props.size)};
  ${props => badgeColorsCSS(props.format, props.href)};

  &::-moz-focus-inner {
    padding: 0;

    border: 0;
  }
`;
