//@ts-ignore
import React from 'react'; 
import styled, {
    //@ts-ignore 
    StyledComponentClass
    // StyledComponentClass must be in scope to generate type definitions and
    // @ts-ignored because it is not used
    } from 'styled-components';
import { rem } from 'polished';

import { AvatarProps } from './AvatarProps';


const avatarSizes = {
    auto: '100%',
    xs: `${rem(16)}`,
    sm: `${rem(30)}`,
    md: `${rem(40)}`,
    lg: `${rem(64)}`,
    xl: `${rem(150)}`
};

export const AvatarStyled = styled<AvatarProps, 'img'>('img')`
    display: ${props => props.isInline ? 'inline-block' : 'none'};
    height: ${props => avatarSizes[props.size]};
    width: ${props => avatarSizes[props.size]};
    position: relative;
    border-radius: 100%;
`;