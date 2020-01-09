import styled, { css } from 'styled-components';
import { rem, rgba, tint } from 'polished';

import { IrisTheme } from '../../../themes';
import { setTrans } from '../../../motion';

interface Props {
  theme: IrisTheme;
}

const transition = setTrans({ transitionDuration: '150ms' });

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  min-height: 12rem;
  border-radius: ${rem(4)};
  ${transition('box-shadow', 'background-color', 'border')};
  ${themeStyles}

  svg {
    height: ${rem(30)};
    ${transition('transform')};

    path {
      ${transition('fill')};
    }
  }

  p {
    margin-top: ${rem(12)};
    margin-bottom: 0;
    ${transition('color')};
  }

  &:hover,
  &:focus,
  &:focus-within,
  &:active {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
      rgba(0, 0, 0, 0.3) 0px 0px 4px -1px;

    svg {
      transform: scale(1.1);
    }
  }

  &:hover:not(:active) {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
      rgba(0, 0, 0, 0.3) 0px 0px 4px -1px;
  }
`;

function themeStyles({
  theme: { name, content, formats, item },
}: Props) {
  const borderStyle = name === 'dark' ? 'solid' : 'dashed';
  const borderOpacity = name === 'dark' ? 0.5 : 0;
  const borderColor =
    name === 'dark' ? formats.primary : content.color;

  return css`
    background-color: ${item.bg};
    border: 1px dashed ${rgba(content.color, 0.2)};

    svg {
      path {
        fill: ${rgba(formats.soft, 0.6)};
      }
    }

    p {
      color: ${rgba(formats.soft, 0.6)};
    }

    &:hover,
    &:focus,
    &:focus-within,
    &:active {
      background-color: ${tint(0.05, item.bg)};
      border: 1px ${borderStyle} ${rgba(borderColor, borderOpacity)};

      path {
        fill: ${rgba(formats.primary, 0.75)};
      }

      p {
        color: ${rgba(formats.primary, 0.75)};
      }
    }
  `;
}

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
