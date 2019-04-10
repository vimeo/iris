import React from 'react';
import styled from 'styled-components';
import { IrisComponent } from '../Utils';
import { size } from 'polished';

type sizes = 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  src: string;
  srcSet?: string;
  size?: sizes;
}

export const Avatar: IrisComponent<Props> = ({
  size = 'auto',
  ...props
}) => <AvatarStyled size={size} {...props} />;

const avatarSizes = {
  auto: '100%',
  xs: '1rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '4rem',
  xl: '9.375rem',
};

const AvatarStyled = styled.img<{
  size: sizes;
}>`
  ${props => size(avatarSizes[props.size])}
  position: relative;
  border-radius: 100%;
`;
