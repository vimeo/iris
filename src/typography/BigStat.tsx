import React, { SFC } from 'react';
import styled, { css } from 'styled-components';

import { antialias, fontFamily } from './index';

import { AstroGranite, SoutherlySky } from '../color';

interface Props {
  element?: 'p';
  theme?: 'dark' | 'light';
}

export const BigStat: SFC<Props> = ({
  element = 'p',
  theme = 'light',
  ...props
}) => <Text as={element} theme={theme} {...props} />;

const Text = styled.p<Props>`
  font: 300 1.5rem / 2rem ${fontFamily};
  letter-spacing: 0.01rem;
  margin-bottom: 1.5rem;

  ${({ theme }) =>
    theme === 'light'
      ? css`
          color: ${AstroGranite};
        `
      : css`
          color: ${SoutherlySky};
          ${antialias}
        `};
`;
