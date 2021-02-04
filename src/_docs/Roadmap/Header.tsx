import React from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';

import { Cell } from './Cell';

const years = ['2021', '2022', '2023', '2024'];
const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

export function Header({ state, children = null, ...props }) {
  const [start, startSet] = state;
  const { year, quarter } = start;

  function onClick({ year, quarter }) {
    if (start.year === year && start.quarter === quarter) {
      startSet({ year: null, quarter: null });
    } else {
      startSet({ year, quarter });
    }
  }

  return (
    <HeaderStyled {...props}>
      <Year style={{ width: '19rem' }}>
        {year && quarter && 'viewing ' + year + ' ' + quarter}
      </Year>
      {years.map((year) => (
        <Year>
          <div>{year}</div>

          <div style={{ display: 'flex' }}>
            {quarters.map((quarter) => (
              <Quarter onClick={() => onClick({ year, quarter })}>
                {quarter}
              </Quarter>
            ))}
          </div>
        </Year>
      ))}
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0 1rem 1rem;
  /* background-color: ${(p) => rgba(p.theme.content.color, 0.75)}; */
  background-color: ${(p) => rgba(p.theme.content.background, 0.75)};
  z-index: 1000;
`;

const Text = styled.span`
  display: inline-flex;
  width: 12rem;
`;

const Year = styled.div`
  display: inline-block;
  flex-wrap: nowrap;
`;

const Quarter = styled(Cell)`
  width: 5rem;
  cursor: pointer;
  transition: 80ms ease-in-out;
  border-radius: 0.25rem;
  padding-left: 0.25rem;

  &:hover {
    background: ${(p) => rgba(p.theme.content.color, 0.1)};
  }
`;
