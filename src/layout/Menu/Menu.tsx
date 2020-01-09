import React from 'react';

import { MenuStyled } from './Menu.style';
import { Section, Item, Minors } from './Menu.minors';

import { withIris, IrisProps } from '../../utils';

export const Menu = withIris<HTMLDivElement, Props, Minors>(
  MenuComponent,
);

Menu.Section = Section;
Menu.Item = Item;

type Props = IrisProps<
  {
    children: any;
  },
  HTMLDivElement
>;

function MenuComponent({ children, forwardRef, ...props }: Props) {
  return (
    <MenuStyled ref={forwardRef} {...props}>
      {children}
    </MenuStyled>
  );
}
