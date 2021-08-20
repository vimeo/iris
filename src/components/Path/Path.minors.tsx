import React, { ReactElement, FunctionComponent } from 'react';

import {
  Text,
  Link as StyledLink,
  PathIcon,
  Arrow,
} from './Path.style';

import { IrisProps } from '../../utils';

export interface Minors {
  Link: FunctionComponent<IrisProps<LinkProps>>;
  Current: FunctionComponent<IrisProps<CurrentProps>>;
}

type LinkProps = IrisProps<{
  href: string;
}>;

export function Link({ children, href, ...props }) {
  return (
    <>
      <StyledLink
        href={href}
        variant="minimal"
        format="primary"
        {...props}
      >
        {children}
      </StyledLink>
      <Arrow />
    </>
  );
}

type CurrentProps = IrisProps<{
  icon?: ReactElement;
}>;

export function Current({ children, icon, ...props }: CurrentProps) {
  return (
    <Text {...props}>
      {children}
      <PathIcon>{icon}</PathIcon>
    </Text>
  );
}
