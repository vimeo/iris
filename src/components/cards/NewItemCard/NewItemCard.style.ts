import styled from 'styled-components';

import { themes } from '../../../themes';
import { setTrans } from '../../../motion';
import { rem, rgba, tint } from 'polished';

const theme = themes.light;
const transition = setTrans({ transitionDuration: '150ms' });

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  min-height: 12rem;
  border-radius: ${rem(4)};
  background-color: ${theme.item.bg2};
  border: 1px dashed ${rgba(theme.color, 0.15)};
  ${transition('box-shadow', 'background-color', 'border')};
  svg {
    ${transition('transform')};
    height: ${rem(30)};
    path {
      ${transition('fill')};
      fill: ${rgba(theme.formats.soft, 0.6)};
    }
  }
  p {
    margin-top: ${rem(12)};
    margin-bottom: 0;
    ${transition('color')};
    color: ${rgba(theme.formats.soft, 0.6)};
  }
  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    outline: none;
    background-color: ${tint(0.05, theme.item.bg)};
    border: 1px dashed ${rgba(theme.color, 0)};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
      rgba(0, 0, 0, 0.3) 0px 0px 4px -1px;
    svg {
      transform: scale(1.1);
      path {
        fill: ${rgba(theme.formats.primary, 0.75)};
      }
    }
    p {
      color: ${rgba(theme.formats.primary, 0.75)};
    }
  }
  &:hover:not(:active) {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
      rgba(0, 0, 0, 0.3) 0px 0px 4px -1px;
  }
`;

export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  box-shadow: none;
`;

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  &:focus {
    outline: none;
  }
`;
