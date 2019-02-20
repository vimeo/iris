import React, { SFC } from 'react';

import { LinkText, LinkTextProps } from '../LinkText/LinkText';
import { BreadcrumbLinkContent } from '../BreadcrumbLinkContent/BreadcrumbLinkContent';
import { Omit } from '../Utils/Omit';
import { BaseProps } from '../Utils/BaseProps';

export interface BreadcrumbLinkProps extends BaseProps {
  format: 'lightTheme' | 'darkTheme';
  href: string;
}

export const BreadcrumbLink: SFC<
  BreadcrumbLinkProps & Omit<LinkTextProps, 'format'>
> = ({ children, format = 'lightTheme', href, ...props }) => (
  <LinkText
    href={href}
    decoration="silent"
    format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
    {...props}
  >
    <BreadcrumbLinkContent>{children}</BreadcrumbLinkContent>
  </LinkText>
);
