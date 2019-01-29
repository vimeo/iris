import React, { SFC, HTMLProps } from 'react';
import { Omit } from '../Utils/Omit';
import { AvatarProps } from './AvatarProps';
import { AvatarStyled } from './AvatarStyled';

export const Avatar: SFC<
  AvatarProps & Omit<HTMLProps<HTMLImageElement>, 'size'>
> = ({
  alt,
  isInline = true,
  ref: _,
  // ???
  crossOrigin,
  size = 'auto',
  src,
  srcSet,
  ...filteredProps
}) => (
  <AvatarStyled
    alt={alt}
    isInline={isInline}
    size={size}
    src={src}
    srcSet={srcSet}
    {...filteredProps}
  />
);
