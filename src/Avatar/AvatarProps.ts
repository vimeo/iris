import React from 'react';
import { Omit } from '../globals/js/type-helpers';


export interface AvatarProps extends Omit<React.HTMLProps<HTMLImageElement>, 'size'> {
    /**
     * alternative text description of the avatar
     */
    alt: string,
    /**
     * src URI info for avatar
     */
    src: string,
    /**
     * srcSet URI info for avatar
     */
    srcSet: string, // when is this used?
    /**
     * CSS 'display: inline-block'
     */
    isInline?: boolean,
    /**
     * Choose the avatar size
     */
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}