import styled from 'styled-components';
import { rem } from 'polished';

const avatarSizes = {
  auto: '100%',
  xs: `${rem(16)}`,
  sm: `${rem(32)}`,
  md: `${rem(40)}`,
  lg: `${rem(64)}`,
  xl: `${rem(150)}`,
};

export const AvatarStyled = styled.img<{
  size: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}>`
  height: ${props => avatarSizes[props.size]};
  width: ${props => avatarSizes[props.size]};
  position: relative;
  border-radius: 100%;
`;
