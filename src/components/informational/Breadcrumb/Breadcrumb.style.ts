import styled, { css } from 'styled-components';
import { rem, em } from 'polished';

import { ChevronRight } from '../../../icons';
import { Paragraph } from '../../../typography';

export const ArrowIconWidth = 24;
export const ARROWLEFT_CLASSNAME = 'BreadcrumbLink_ArrowLeft';

export const truncateWithCSS = css`
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: auto;
  white-space: nowrap;
  color: ${props => props.theme.formats.soft};
`;

export const BreadcrumbContainer = styled.div<{
  gridColumns: number;
}>`
  /* Fallback: IE11 [START] */
  display: flex;
  /* Fallback: IE11 [END] */
  @supports (display: inline-grid) {
    display: inline-grid;
    grid-template-columns: ${props =>
      `repeat(${props.gridColumns}, auto)`};
  }
`;

export const Wrapper = styled.div<{ showOnSmall?: boolean }>`
  ${truncateWithCSS}
  color: ${props => props.theme.formats.soft};
  display: ${props => (props.showOnSmall ? 'inline-block' : 'none')};
  position: relative;

  @media screen and (min-width: ${em(768)}) {
    display: inline-block;
    padding-right: ${rem(ArrowIconWidth)};
  }

  ${props =>
    props.showOnSmall &&
    css`
      ${ArrowLeftWrapper} {
        display: inline-block;
        padding-right: ${rem(8)};

        @media screen and (min-width: ${em(768)}) {
          display: none;
        }
      }
    `}
`;

export const Label = styled(Paragraph)`
  ${truncateWithCSS};
  text-overflow: ellipsis;
  margin: 0;
  max-width: 100%;
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

  @media screen and (min-width: ${em(768)}) {
    display: inline-block;
  }
`;

export const Current = styled(Paragraph as any)`
  ${truncateWithCSS};
  text-overflow: ellipsis;
  margin: 0;
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

  @media screen and (min-width: ${em(768)}) {
    display: none;
  }
`;

export const LinkLabel = styled.span`
  display: none;

  @media screen and (min-width: ${em(768)}) {
    display: inline;
  }
`;
