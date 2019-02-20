import React, { SFC } from 'react';
import { AvatarStyled } from './AvatarStyled';
import { BaseProps } from '../Utils/BaseProps';

export interface Props extends BaseProps {
  alt: string;
  src: string;
  srcSet: string; // when is this used?
  size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar: SFC<Props> = ({
  alt,
  size = 'auto',
  src,
  srcSet,
  ...props
}) => (
  <AvatarStyled
    alt={alt}
    size={size}
    src={src}
    srcSet={srcSet}
    {...props}
  />
);
