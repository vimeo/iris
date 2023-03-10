import styled, { css } from 'styled-components';
import { rem, rgba } from 'polished';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Dot = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
  display: inline-flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -0.375rem;
  z-index: 10;
  border: 0.5px solid ${({ theme }) => rgba(theme.content.color, 0.1)};
`;

export const Wrapper = styled.div<{ width?: number }>`
  padding: 0;
  position: relative;
  width: ${(p) => p.width}px;
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const SpectrumWrapper = styled.div<{ dragging?: boolean }>`
  position: relative;
  width: calc(100% + 8rem);

  ${(p) =>
    p.dragging
      ? css`
          padding: 4rem 8rem;
          top: -4rem;
          left: -8rem;
        `
      : css`
          padding: 0 0;
          top: 0;
          left: 0;
        `};
`;

export const Cursor = styled.div<any>`
  width: 1.25rem;
  height: 1.25rem;
  pointer-events: none;
  border: 0.125rem solid white;
  border-radius: 50%;
  position: absolute;
  left: -0.625rem;
  top: -0.625rem;
  z-index: 4001;
`;

export const lightRay = (color, dir, el) => css`
  ${el} {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 0.25rem 0.25rem 0 0;
    background: linear-gradient(to ${dir}, ${color}, transparent);
  }
`;

export const HueSpectrum = styled.div<any>`
  width: ${(props) => rem(props.width)};
  height: ${(props) => rem(props.height + 1)};
  position: relative;
  border-radius: 0.25rem 0.25rem 0 0;
  cursor: pointer;

  ${lightRay('#FFF', 'right', '&::before')};
  ${lightRay('#000', 'top', '&::after')};

  &:active {
    cursor: none;
  }
`;
