import styled, { css } from 'styled-components';
import { em } from 'polished';

import { Link as L, Text as T } from '../../typography';
import { ChevronRight } from '../../icons';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${em(768)}) {
    > * {
      display: none;
    }

    > :last-child {
      display: block;
    }
  }
`;

const pathItemStyle = css`
  position: relative;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  line-height: 1.5rem;

  &:last-child {
    padding-right: 1.334rem;
  }
`;

type TSA = TemplateStringsArray;
export const Link = styled(L)(pathItemStyle as TSA);
export const Text = styled(T)(pathItemStyle as TSA);

export const PathIcon = styled.span`
  position: absolute;
  top: 0.125rem;
  right: 0;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const MobileArrow = styled.a`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.25rem;
  display: inline-block !important;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    * {
      fill: ${(p) => p.theme.formats.primary};
    }
  }

  @media screen and (min-width: ${em(768)}) {
    display: none !important;
  }
`;

export const Arrow = styled(ChevronRight)`
  width: 1.5rem;
  height: 1.5rem;
  display: none;
  right: 0;

  * {
    fill: ${(p) => p.theme.formats.soft};
  }

  @media screen and (min-width: ${em(768)}) {
    display: inline-block;
  }
`;
