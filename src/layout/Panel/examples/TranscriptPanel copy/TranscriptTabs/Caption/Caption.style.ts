import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

import { delay } from './delay';

import { blue } from '../../../../../../color';
import { Paragraph as P } from '../../../../../../typography';

export const Container = styled.div`
  padding: 0.5rem 0;
`;

const PhaseInSegment = keyframes`
  /* 0% { opacity: 0; }
  100% { opacity: 1; } */
   0% {
     transform: translateX(0.334rem);
     opacity: 0;
   }

   75% {
     transform: translateX(-0.167rem);
     opacity: 0.334;
   }

   100% {
     transform: translateX(0);
     opacity: 1;
   }
`;

export const Segment = styled.div<any>`
  cursor: pointer;
  border: 2px solid ${rgba(blue(500), 0)};
  border-radius: 0.25rem;
  padding: 0.25rem 0.375rem;
  transition: border 80ms ease-in-out;
  animation: 150ms ${PhaseInSegment} ease-in-out both ${delay}ms;

  &:hover {
    border: 2px solid ${blue(500)};
  }

  ${(p) =>
    p.active &&
    css`
      border: 2px solid ${blue(500)};
      background-color: ${rgba(blue(500), 0.25)};
    `};
`;

export const Paragraph = styled(P)`
  display: block;
  margin: 0;
`;

// const Container = styled.div`
//   padding: 0.5rem 0;
//   content-visibility: auto;
//   contain-intrinsic-size: 114px;
// `;

// const PhaseInSegment = keyframes`
//   0% {
//     transform: translateX(0.334rem);
//     opacity: 0;
//   }

//   75% {
//     transform: translateX(-0.167rem);
//     opacity: 0.334;
//   }

//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;
