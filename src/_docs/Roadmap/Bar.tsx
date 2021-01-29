import React from 'react';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

import { Tip } from '../../components';

export function Dot(props) {
  return (
    <Tip
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consequuntur?"
      wrap
    >
      <DotStyled {...props} />
    </Tip>
  );
}

const DotStyled = styled.div.attrs(
  ({ color = blue, weight = 500, ...props }) => ({
    color,
    weight,
    ...props,
  })
)`
  width: 2rem;
  height: 2rem;
  background-color: ${(p) =>
    p.partial ? rgba(p.color(p.weight), 0.2) : p.color(p.weight)};
  border: 2px solid
    ${(p) =>
      p.partial
        ? rgba(p.color(p.weight), 1)
        : rgba(p.color(p.weight), 0)};
  border-radius: 50%;
  position: absolute;
  line-height: 2rem;
  vertical-align: middle;
  text-align: center;
  top: 0;
  left: ${({ year, quarters }) =>
    3 + (year - 2021) * 32 + (quarters - 1) * 8}rem;

  ${({ goals }) => {
    const goalStart = 0;

    return (
      goals &&
      css`
        margin-left: ${goalStart};
      `
    );
  }}
`;

export function Bar({ children, score, ...props }) {
  return (
    <Tip
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consequuntur?"
      wrap
    >
      <BarStyled {...props}>{score}</BarStyled>
    </Tip>
  );
}

const BarStyled = styled.div.attrs(
  ({ color = blue, weight = 500, ...props }) => ({
    color,
    weight,
    ...props,
  })
)`
  width: ${(p) => p.quarters.length * 8 - 1}rem;
  height: 2rem;
  /* background: linear-gradient(
    to right,
    ${rgba(blue(600), 0.5)},
    ${rgba(blue(600), 1)}
  ); */
  color: white;
  background-color: ${(p) =>
    p.partial ? rgba(p.color(p.weight), 0.2) : p.color(p.weight)};
  border: 2px solid
    ${(p) =>
      p.partial
        ? rgba(p.color(p.weight), 1)
        : rgba(p.color(p.weight), 0)};
  border-radius: 0.75rem;
  font-weight: 600;
  position: absolute;
  line-height: 1.75rem;
  vertical-align: middle;
  letter-spacing: 0.0334rem;
  font-size: 1rem;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.25);
  text-align: center;
  top: 0;
  left: ${({ year, quarters }) =>
    (year - 2021) * 32 + (quarters[0] - 1) * 8 + 0.5}rem;

  ${({ goals }) => {
    const goalStart = 0;

    return (
      goals &&
      css`
        margin-left: ${goalStart};
      `
    );
  }}
`;
