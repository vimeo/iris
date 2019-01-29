import { css } from 'styled-components';
import { rem } from 'polished';
import * as COLORS from '../Color/Color';

export const sharedInlineInputWrapperStyles = css`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: ${rem(8)};
  flex-wrap: wrap;
`;

export const sharedInlineInputStyles = css`
  display: inline-flex;
  position: absolute;
  z-index: 2;
  top: 0.625rem;
  left: 0.625rem;
  width: ${rem(1)};
  height: ${rem(1)};
  margin: 0;
  appearance: none;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
  }
`;

export const sharedInlineInputFillStyles = css`
  position: absolute;
  content: '';
  transition: all 200ms ease-out;
  transform: scale(0);
`;

export const sharedInlineInputActivatedFillStyles = css`
  transform: scale(1);
`;

export const sharedInlineInputElementReplaceStyles = css`
  display: block;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 1.25rem;
  height: 1.25rem;

  border-width: ${rem(1)};
  border-style: solid;

  ${props =>
    props.theme === 'default' &&
    `
        border-color: ${COLORS.RegentGray};
        background-color: ${COLORS.White};

        &:hover {
            border-color: ${COLORS.AstroGranite};
        }
    `} ${props =>
    props.theme === 'dark' &&
    `
        border-color: ${COLORS.SoutherlySky};

        &:hover {
            border-color: ${COLORS.White};
        }
    `};
`;
