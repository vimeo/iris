import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

import { blue } from '../../../../../color';
import { Paragraph as P } from '../../../../../typography';

export function Caption({
  data,
  active = false,
  delay = 0,
  ...props
}: any) {
  const { start, end, text } = data;
  return (
    <Container {...props}>
      <Segment active={active} delay={delay}>
        <Timecode start={start} end={end} />
        <Paragraph size="2">{text}</Paragraph>
      </Segment>
    </Container>
  );
}

const delays = [];

const logBase = (n = 1, base = 10) => Math.log(n) / Math.log(base);
const calcDelay = (i) => logBase(i, 1.1) * 10;

for (let i = 1; i < 30; i++) delays[i] = Math.round(calcDelay(i));
const delay = ({ delay }) => delays[delay];

const Container = styled.div`
  padding: 0.5rem 0;
`;

const PhaseInSegment = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Segment = styled.div<any>`
  cursor: pointer;
  border: 2px solid ${rgba(blue(500), 0)};
  border-radius: 0.25rem;
  padding: 0.25rem 0.375rem;
  transition: border 80ms ease-in-out;
  animation: 180ms ${PhaseInSegment} ease-in-out both ${delay}ms;

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

function Timecode({ start, end, ...props }) {
  return (
    <Paragraph size="2" {...props}>
      {start} - {end}
    </Paragraph>
  );
}

const Paragraph = styled(P)`
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
