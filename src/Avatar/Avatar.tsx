import React, { SFC, HTMLProps } from 'react';
import { Omit } from '../globals/js/type-helpers';

import { AvatarProps } from './AvatarProps';
import { AvatarStyled } from './AvatarStyled';


const Avatar: SFC <
    AvatarProps &
    Omit<HTMLProps<HTMLImageElement>, 'size'>
> = ({
    alt,
    isInline = true,
    ref: _,
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

export default Avatar;

