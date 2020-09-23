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
  /* background: ${({ theme }) => theme.content.background}; */
  width: ${(p) => p.width}px;
  border-radius: 0.25rem;
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
`;

export const SpectrumWrapper = styled.div`
  padding: 2rem 4rem 1rem;
  position: relative;
  top: -2rem;
  left: -4rem;
  width: calc(100% + 8rem);
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
  z-index: 1000;
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
