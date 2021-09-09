import React, { useRef } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Pagination } from './Pagination';

// import { Grid } from '../Grid/Grid';
import { Button } from '..';
import { Header } from '../../typography';
import { Player, vimeos, useFakeQuery } from '../../storybook';

export default { title: 'components/Pagination/examples' };

const total = 96;
const pageSize = 12;

const Grid = styled.div<any>``;

function pageChange({ page, goto }) {
  return ({ paging }) => {
    if (paging.type === 'next') goto(page + 1);
    if (paging.type === 'prev') goto(page - 1);
    if (paging.type === 'goto') goto(paging.page);
  };
}

export const GenericGrid = () => <GenericGridStory />;
function GenericGridStory() {
  const ref = useRef(null);

  const { items, page, goto } = useFakeQuery({ total, pageSize });
  const onChange = pageChange({ page, goto });

  return (
    <>
      <Grid ref={ref} columns={4}>
        {items.map((item, key) => (
          <Item style={{ height: 120 }} key={key}>
            <Header size="4">{item.content}</Header>
          </Item>
        ))}
      </Grid>
      <Footer>
        <Next
          format="secondary"
          disabled={page === Math.ceil(total / pageSize)}
          onClick={() => goto(page + 1)}>
          Next
        </Next>
        <Pagination
          active={page}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
        />
        <Header size="5" style={{ margin: 0 }}>
          of {Math.ceil(total / pageSize)}
        </Header>
      </Footer>
    </>
  );
}

export const VideoGrid = () => <PaginationStory />;
function PaginationStory() {
  const { items, page, goto } = useFakeVideos({ total, pageSize });
  const onChange = pageChange({ page, goto });

  return (
    <>
      <Grid columns={3}>
        {items.map((id) => (
          <Player id={id} />
        ))}
      </Grid>
      <Pagination
        active={page}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        css={`
          padding: 1rem 0;
          justify-content: flex-end;
        `}
      />
    </>
  );
}

const Item = styled.div`
  background: ${({ theme }) => rgba(theme.content.color, 0.2)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Next = styled(Button)`
  margin-right: auto;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function useFakeVideos({ total, pageSize }) {
  const { items, page, goto } = useFakeQuery({ total, pageSize });
  const videos = items.map((_, i) => vimeos[i + page * pageSize]);

  return { items: videos, page, goto };
}
