import React, { ReactElement } from 'react';

import { Wrapper, MobileArrow } from './Path.style';
import { Minors, Link, Current } from './Path.minors';

import { IrisProps, withIris } from '../../utils';
import { ArrowLeft } from '../../icons';

export const Path = withIris<HTMLDivElement, Props, Minors>(
  PathComponent
);

export type Props = IrisProps<
  { children: ReactElement[] },
  HTMLDivElement
>;

Path.Link = Link;
Path.Current = Current;

function PathComponent({ children, forwardRef, ...props }: Props) {
  const { href } = children[children.length - 2].props;

  return (
    <Wrapper ref={forwardRef} {...props}>
      <MobileArrow href={href}>
        <ArrowLeft />
      </MobileArrow>
      {children}
    </Wrapper>
  );
}
