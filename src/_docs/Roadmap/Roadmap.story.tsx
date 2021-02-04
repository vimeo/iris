import React, { useState } from 'react';
import styled from 'styled-components';

import { data } from './Roadmap.data';
import { Cell, Item } from './Cell';
import { Header } from './Header';

import { blue, red, green, yellow } from '../../color';
import { rgba } from 'polished';

export default {
  title: 'Roadmap',
};

export const Common = () => <CommonStory />;
function CommonStory() {
  const state = useState({ year: null, quarter: null });
  const { year, quarter } = state[0];

  return (
    <Roadmap>
      <Markers />
      <Header state={state} />
      {data.map((props, i) => (
        <Category
          color={colors[i]}
          weight={600}
          state={state}
          {...props}
        />
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
  state,
  ...props
}) {
  return (
    <CatCell>
      {name}
      {subCategories &&
        subCategories.map((props) => (
          <SubCategory
            color={color}
            weight={weight}
            state={state}
            {...props}
          />
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
  state,
  ...props
}) {
  let { year, quarter } = state[0];
  quarter =
    quarter === null ? null : parseInt(quarter.replace('Q', ''));
  year = year === null ? null : parseInt(year);

  const selected = items.some((item) =>
    item.goals?.some((goal) => {
      console.log(item.name, goal.quarters[0]);
      return goal.year === year && goal.quarters.includes(quarter);
    })
  );

  if (!year && !quarter)
    return (
      <Cell style={{ paddingLeft: '2rem' }}>
        {name}

        {items &&
          items.map((props) => {
            return <Item color={color} weight={weight} {...props} />;
          })}
      </Cell>
    );

  return selected ? (
    <Cell style={{ paddingLeft: '2rem' }}>
      {name}

      {items &&
        items.map((props) => {
          const selected =
            props.goals?.[0].quarters.includes(quarter) &&
            props.goals?.[0].year === year;

          return selected ? (
            <Item color={color} weight={weight} {...props} />
          ) : null;
        })}
    </Cell>
  ) : null;
}
