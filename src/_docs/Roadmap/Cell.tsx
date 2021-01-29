import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';

import { Bar, Dot } from './Bar';
import { themes } from '../../themes';

export const Cell = styled.div`
  padding: 0.5rem 0;
  min-width: 8rem;
  min-height: 3rem;
  line-height: 2rem;
`;

const ItemStyled = styled(Cell)`
  display: flex;
  padding-left: 2rem;
  border-bottom: 1px solid ${(p) => rgba(p.theme.content.color, 0.05)};
  transition: 80ms ease-in-out;

  &:hover {
    border-bottom: 1px solid
      ${(p) => rgba(p.theme.content.color, 0.2)};
    background-color: ${(p) => rgba(p.theme.content.color, 0.05)};
  }
`;

export function Item({
  children = null,
  goals,
  events,
  name,
  color,
  weight,
  ...props
}) {
  return (
    <ItemStyled>
      <div
        style={{
          width: '15rem',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </div>
      <div style={{ position: 'relative' }}>
        {goals &&
          goals.map((props) => (
            <Bar color={color} weight={weight} {...props} />
          ))}
        {events &&
          events.map((props) => (
            <Dot color={color} weight={weight} {...props} />
          ))}
      </div>
    </ItemStyled>
  );
}
