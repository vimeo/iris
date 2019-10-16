import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { ChevronRight } from '../../../icons';
import { Paragraph } from '../../../typography';
import { mediaQuery } from '../../../layout';

export const ArrowIconWidth = 24;
export const ARROWLEFT_CLASSNAME = 'BreadcrumbLink_ArrowLeft';

export const truncatewithEllipsisCSS = css`
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: auto;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${props => props.theme.formats.soft};
`;

export const Wrapper = styled.div<{ showOnSmall?: boolean }>`
  color: ${props => props.theme.formats.soft};
  display: ${props => (props.showOnSmall ? 'inline-block' : 'none')};
  position: relative;
  ${mediaQuery.md(css`
    display: inline-block;
    padding-right: ${rem(ArrowIconWidth)};
  `)};
  ${props =>
    props.showOnSmall &&
    css`
      ${ArrowLeftWrapper} {
        display: inline-block;
        padding-right: ${rem(8)};
        ${mediaQuery.md(css`
          display: none;
        `)};
      }
    `}
`;

export const Label = styled(Paragraph)`
  ${truncatewithEllipsisCSS};
  padding-right: 1.5rem;
`;

export const Arrow = styled(ChevronRight)`
  position: absolute;
  top: ${rem(-2)};
  width: ${rem(ArrowIconWidth)};
  height: ${rem(ArrowIconWidth)};
  display: none;
  right: 0;
  * {
    fill: currentColor;
  }
  ${mediaQuery.md`
    display: inline-block;
    `};
`;

export const Current = styled(Paragraph as any)`
  width: calc(50%);
  ${truncatewithEllipsisCSS};
  ${mediaQuery.md`
    width: calc(33%);
  `};
`;

export const ArrowLeftWrapper = styled.span`
  display: inline-block;
  position: relative;
  top: ${rem(5)};
  svg {
    height: ${rem(24)};
    width: ${rem(24)};
    * {
      fill: currentColor;
    }
  }
  ${mediaQuery.md`
    display: none;
  `};
`;

export const LinkLabel = styled.span`
  display: none;
  ${mediaQuery.md`
    display: inline;
  `};
`;
