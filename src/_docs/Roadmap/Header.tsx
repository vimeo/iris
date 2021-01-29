import React from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';

import { Cell } from './Cell';

export function Header({ children = null, ...props }) {
  return (
    <HeaderStyled {...props}>
      <Year style={{ width: '19rem' }}></Year>
      <Year>
        <div>2021</div>
        <div style={{ display: 'flex' }}>
          <Quarter>Q1</Quarter>
          <Quarter>Q2</Quarter>
          <Quarter>Q3</Quarter>
          <Quarter>Q4</Quarter>
        </div>
      </Year>
      <Year>
        <div>2022</div>
        <div style={{ display: 'flex' }}>
          <Quarter>Q1</Quarter>
          <Quarter>Q2</Quarter>
          <Quarter>Q3</Quarter>
          <Quarter>Q4</Quarter>
        </div>
      </Year>
      <Year>
        <div>2023</div>
        <div style={{ display: 'flex' }}>
          <Quarter>Q1</Quarter>
          <Quarter>Q2</Quarter>
          <Quarter>Q3</Quarter>
          <Quarter>Q4</Quarter>
        </div>
      </Year>
      <Year>
        <div>2024</div>
        <div style={{ display: 'flex' }}>
          <Quarter>Q1</Quarter>
        </div>
      </Year>
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
`;
