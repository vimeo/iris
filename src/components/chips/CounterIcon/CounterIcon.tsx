import React, { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';

import { TipOverlay } from '../../portals/TipOverlay/TipOverlay';
import { CounterIconFocusOutline as FocusOutline } from './CounterIconFocus';
import { FocusOutlineFocused } from '../../../utils';

import { ParagraphLg, TRANSITIONS } from '../../../legacy';
import { withDeprecateProps } from '../../../utils';
import { AstroGranite } from '../../../legacy';

interface Props {
  counterTitle?: string;
  title?: string;
  href?: string;
  icon: ReactNode;
  onClick?: MouseEventHandler;
  tooltipProps?: {};
}

export const CounterIcon = withDeprecateProps<Props>(
  {
    counterTitle:
      '`counterTitle` is deprecated and will no longer be available in Iris 8. Please use `title`.',
  },
  ({
    children,
    href,
    icon,
    counterTitle,
    title,
    onClick,
    tooltipProps,
    className,
    ...props
  }) => {
    if (counterTitle) {
      title = counterTitle;
    }
    const hrefProp = href ? { href } : {};

    return (
      <CounterIconStyled className={className}>
        <TipOverlay
          href={href}
          tooltipText={title}
          onClick={!href && onClick}
          triggerOnClick={false}
          {...tooltipProps}
        >
          <Content
            {...props}
            as={href ? 'a' : 'span'}
            onClick={href && onClick}
            {...hrefProp}
          >
            <Icon>{icon}</Icon>
            <ParagraphLg element="span">{children}</ParagraphLg>
            <FocusOutline />
          </Content>
        </TipOverlay>
      </CounterIconStyled>
    );
  },
);

const size = 18;

export const CounterIconStyled = styled.div`
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
      fill: ${AstroGranite};
    }
  }
`;

export const Content = styled.span`
  display: inline-flex;
  display: inline-block;
  position: relative;
  padding: ${rem(4)} ${rem(4)} ${rem(4)} ${rem(size + 10)};
  color: ${AstroGranite};
  border: 0;
  border-radius: ${rem(3)};
  background: transparent;
  transition: all ${TRANSITIONS.base};
  text-align: center;
  vertical-align: middle;
  appearance: none;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  outline: none;

  ${CounterIconStyled}:hover & {
    background-color: ${rgba(162, 175, 184, 0.16)};
  }

  &:focus {
    background-color: ${rgba(162, 175, 184, 0.16)};
    ${FocusOutline} {
      ${FocusOutlineFocused};
    }
  }
`;
