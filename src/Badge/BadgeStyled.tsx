import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { badgeColorsCSS, badgeSizeCSS } from './BadgeStyleSettings';

export const BadgeStyled = styled(({ href, ...rest }) =>
  href ? <a href={href} {...rest} /> : <span {...rest} />,
)`
  display: inline-block;
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

  ${badgeSizeCSS};
  ${badgeColorsCSS};

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`;
