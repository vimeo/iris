import React from 'react';
import styled from 'styled-components';

import { data } from './Roadmap.data';
import { Cell, Item } from './Cell';
import { Header } from './Header';

import { blue, red, green, yellow } from '../../color';
import { rgba } from 'polished';

export default {
  title: 'Roadmap',
};

export function Common() {
  return (
    <Roadmap>
      <Markers />
      <Header />
      {data.map((props, i) => (
        <Category color={colors[i]} weight={600} {...props} />
      ))}
    </Roadmap>
  );
}

const colors = [blue, red, green, yellow, blue, red, green, yellow];

function Markers() {
  return (
    <>
      <MarkYear style={{ left: 19 + 0 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 8 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 16 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 24 + 'rem' }} />

      <MarkYear style={{ left: 19 + 32 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 40 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 48 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 56 + 'rem' }} />

      <MarkYear style={{ left: 19 + 64 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 72 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 80 + 'rem' }} />
      <MarkQuarter style={{ left: 19 + 88 + 'rem' }} />

      <MarkYear style={{ left: 19 + 96 + 'rem' }} />
    </>
  );
}

const MarkYear = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: ${(p) => rgba(p.theme.content.color, 0.25)};
`;

const MarkQuarter = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  border-right: 1px dashed ${(p) => rgba(p.theme.content.color, 0)};
`;

const Roadmap = styled.div`
  position: relative;
  padding: 3rem 0 0 0;
  color: ${(p) => p.theme.content.color};
  width: 200%;

  font-family: 'iA Writer Duo S', serif;
  /* font-family: 'Inter', sans-serif; */
`;
// function Roadmap({ children = null, ...props }) {
//   return <div>children</div>;
// }

// function Categories({ children = null, ...props }) {
//   return <Cell>{children}</Cell>;
// }

function Category({
  children = null,
  name,
  subCategories,
  color,
  weight,
  ...props
}) {
  return (
    <CatCell>
      {name}
      {subCategories &&
        subCategories.map((props) => (
          <SubCategory color={color} weight={weight} {...props} />
        ))}
    </CatCell>
  );
}

const CatCell = styled(Cell)`
  border-bottom: 1px solid ${(p) => rgba(p.theme.content.color, 0.25)};
`;

function SubCategory({
  children = null,
  name,
  items,
  color,
  weight,
  ...props
}) {
  return (
    <Cell style={{ paddingLeft: '2rem' }}>
      {name}
      {items &&
        items.map((props) => (
          <Item color={color} weight={weight} {...props} />
        ))}
    </Cell>
  );
}
