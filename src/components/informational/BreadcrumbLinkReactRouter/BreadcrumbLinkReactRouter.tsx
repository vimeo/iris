import React, { SFC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { BreadcrumbLinkContent } from '../BreadcrumbLinkContent/BreadcrumbLinkContent';

import { Link } from '../../../typography/';

export interface BreadcrumbLinkReactRouterProps {
  children: ReactNode;
  format: 'lightTheme' | 'darkTheme';
  to: string;
}

export const BreadcrumbLinkReactRouter: SFC<
  BreadcrumbLinkReactRouterProps
> = ({ children, format = 'lightTheme', to, ...props }) => (
  <RouterLink to={to} {...props}>
    <Link
      element="span"
      format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
      decoration="silent"
      title={children}
    >
      <BreadcrumbLinkContent>{children}</BreadcrumbLinkContent>
    </Link>
  </RouterLink>
);
