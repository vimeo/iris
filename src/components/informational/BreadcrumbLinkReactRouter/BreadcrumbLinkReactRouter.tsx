import React, { SFC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { BreadcrumbLinkContent } from '../BreadcrumbLinkContent/BreadcrumbLinkContent';

import { LinkText } from '../../../typography/';

export interface BreadcrumbLinkReactRouterProps {
  children: ReactNode;
  format: 'lightTheme' | 'darkTheme';
  to: string;
}

export const BreadcrumbLinkReactRouter: SFC<
  BreadcrumbLinkReactRouterProps
> = ({ children, format = 'lightTheme', to, ...props }) => (
  <Link to={to} {...props}>
    <LinkText
      element="span"
      format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
      decoration="silent"
      title={children}
    >
      <BreadcrumbLinkContent>{children}</BreadcrumbLinkContent>
    </LinkText>
  </Link>
);
