import styled from 'styled-components';
import { rem, rgba } from 'polished';

import { antialiasDark } from '../../typography';
import { base } from '../transitions';

const size = 18;

export const CounterIcon = styled.div`
  display: inline-block;
`;

export const Icon = styled.span`
  position: absolute;
  top: ${rem(5)};
  left: ${rem(4)};
  width: ${rem(size)};
  height: ${rem(size)};

  svg {
    width: ${rem(size)};
    height: ${rem(size)};

    * {
      fill: ${({ theme }) => theme.formats.soft};
    }
  }
`;

export const Content = styled.span`
  display: inline-block;
  position: relative;
  padding: ${rem(4)} ${rem(4)} ${rem(4)} ${rem(size + 10)};
  color: ${({ theme }) => theme.formats.soft};
  border: 0;
  border-radius: ${rem(3)};
  background: transparent;
  transition: all ${base};
  text-align: center;
  vertical-align: middle;
  appearance: none;
  align-items: center;
  justify-content: center;
  ${antialiasDark};

  ${CounterIcon}:hover & {
    background-color: ${rgba(162, 175, 184, 0.16)};
  }
`;
