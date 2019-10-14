import styled from 'styled-components';
import { size } from 'polished';

import { Sizes } from './Avatar.types';

const sizes = {
  auto: '100%',
  xxs: '0.75rem',
  xs: '1rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '4rem',
  xl: '9.375rem',
  xxl: '15rem',
};

export const Avatar = styled.img<{ size: Sizes }>`
  ${p => size(sizes[p.size])}
  position: relative;
  border-radius: 100%;
`;

export const Anchor = styled.a`
  text-decoration: none;
  position: relative;
  outline: none;
  display: inline-block;
`;
