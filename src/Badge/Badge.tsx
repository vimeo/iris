import React, { SFC } from 'react';
import { BadgeStyled } from './BadgeStyled';
import { BaseProps } from '../Utils/BaseProps';

export const Badge: SFC<Props> = ({
  children,
  format = 'default',
  href,
  label,
  size = 'sm',
  ...props
}) => (
  <BadgeStyled href={href} format={format} size={size} {...props}>
    {children}
  </BadgeStyled>
);

export interface Props extends BaseProps {
  format?:
    | 'alum'
    | 'beta'
    | 'business'
    | 'curation'
    | 'default'
    | 'explicit'
    | 'featured'
    | 'hd'
    | 'info'
    | 'live'
    | 'live-archive'
    | 'new'
    | 'partner'
    | 'plus'
    | 'producer'
    | 'pro'
    | 'spatial'
    | 'sponsor'
    | 'staff'
    | 'support'
    | 'unrated'
    | 'upgrade'
    | 'vod';
  href?: string;
  label?: string;
  size?: 'sm' | 'lg';
}
