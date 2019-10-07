import React, { SFC } from 'react';

import { BreadcrumbLinkContent } from '../BreadcrumbLinkContent/BreadcrumbLinkContent';

import { LinkText } from '../../../typography';
import { BaseProps } from '../../../utils';

export interface BreadcrumbLinkProps extends BaseProps {
  format: 'lightTheme' | 'darkTheme';
  href: string;
}

export const BreadcrumbLink: SFC<any> = ({
  children,
  format = 'lightTheme',
  href,
  ...props
}) => (
  <LinkText
    href={href}
    decoration="silent"
    format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
    {...props}
  >
    <BreadcrumbLinkContent>{children}</BreadcrumbLinkContent>
  </LinkText>
);
