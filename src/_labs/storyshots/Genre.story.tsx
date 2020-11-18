import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Checkbox } from '../../components';

export function ShowcaseGenres() {
  return (
    <Div>
      {genres.map((genre, i) => (
        <Checkbox
          key={i}
          id={'check' + i}
          value={'check' + i}
          name={'check' + i}
          label={genre}
          style={{ width: '25%' }}
        />
      ))}
    </Div>
  );
}

const Div = styled.div`
  margin: 5rem;
  width: 40rem;
  border: 1px solid ${({ theme }) => rgba(theme.content.color, 0.5)};
  padding: 1rem;
  border-radius: 0.2rem;
  display: flex;
  flex-wrap: wrap;
`;

const genres = [
  'action',
  'adventure',
  'animals',
  'animated',
  'anime',
  'children',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'educational',
  'fantasy',
  'faith',
  'food',
  'fashion',
  'gaming',
  'health',
  'history',
  'horror',
  'miniseries',
  'mystery',
  'nature',
  'news',
  'reality',
  'romance',
  'science',
  'science fiction',
  'sitcom',
  'special',
  'sports',
  'thriller',
  'technology',
];
