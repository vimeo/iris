import React from 'react';

import { AvatarProps } from './AvatarProps';
import { AvatarStyled } from './AvatarStyled';


const Avatar = ({
    alt,
    isInline = true,
    ref: _,
    size = 'auto',
    src,
    srcSet,
    ...filteredProps
}: AvatarProps) =>
    <AvatarStyled
        alt={alt}
        isInline={isInline}
        size={size}
        src={src}
        srcSet={srcSet}
        {...filteredProps} 
    />

export default Avatar;

