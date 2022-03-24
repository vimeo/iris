import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Screen = styled.div<{
  backgroundColor?: string;
  blur?: number;
}>`
  cursor: pointer;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'rgba(50, 50, 50, 0.667)'};
  z-index: 1999;
  transition: 200ms;
  animation: ${fadeIn} 150ms ease-in-out;
  ${({ blur }) => blur && `backdrop-filter: blur(${blur}rem)`};
`;
