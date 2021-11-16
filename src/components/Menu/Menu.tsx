import React from 'react';

import { MenuStyled } from './Menu.style';
import { Section, Item, Minors } from './Menu.minors';

import { withIris, IrisProps } from '../../utils';

export const Menu = withIris<HTMLDivElement, Props, Minors>(
  MenuComponent
);

Menu.Section = Section;
Menu.Item = Item;

export type Props = IrisProps<
  {
    children: any;
    /**
     * [default = 'secondary']
     */
    format?: 'basic' | 'secondary';
  },
  HTMLDivElement
>;

function MenuComponent({
  children,
  format = 'secondary',
  forwardRef,
  ...props
}: Props) {
  return (
    <MenuStyled ref={forwardRef} format={format} {...props}>
      {children}
    </MenuStyled>
  );
}
