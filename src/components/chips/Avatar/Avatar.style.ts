import styled from 'styled-components';
import { size } from 'polished';

import { Size, sizes } from './Avatar.types';

export const Avatar = styled.img<{ size: Size }>`
  ${(p) => size(sizes[p.size])}
  position: relative;
  border-radius: 100%;
`;

export const Anchor = styled.a`
  text-decoration: none;
  position: relative;
  outline: none;
  display: inline-block;
`;
