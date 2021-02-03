import React from 'react';
import styled from 'styled-components';

export function Icon({ svg, theme: { name } }) {
  return svg ? <IconStyled dangerouslySetInnerHTML={svg} /> : name;
}

const IconStyled = styled.div`
  svg {
    width: 1.25rem;
    height: 1.25rem;
    opacity: 0.75;
    * {
      fill: ${({ theme }) => theme.textColor};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 0.667rem;
  font-weight: 800;
  line-height: 0.667rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;
