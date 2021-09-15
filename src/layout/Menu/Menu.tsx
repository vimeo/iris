import React, { cloneElement, useState } from 'react';

import { MenuStyled } from './Menu.style';
import { Section, Item, Minors } from './Menu.minors';

import {
  withIris,
  IrisProps,
  useForwardRef,
  useIsomorphicEffect,
} from '../../utils';

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
  className,
  format = 'secondary',
  forwardRef,
  // OPTIONAL SEPARATE INDENTATION FROM PADDING
  // indentation,
  style,
  ...props
}: Props) {
  const ref = useForwardRef(forwardRef);
  const [indentation, indentationSet] = useState([0, 0]);

  useIsomorphicEffect(() => {
    const { paddingLeft } = getComputedStyle(ref.current);

    const indentation = parseInt(paddingLeft);
    indentationSet([indentation, indentation]);
  }, [style, className]);

  console.log('a', { indentation });

  const childrenCloned = Array.isArray(children)
    ? children.map((child) => cloneElement(child, { indentation }))
    : cloneElement(children, { indentation });

  console.log({ childrenCloned });

  return (
    <MenuStyled
      className={className}
      format={format}
      ref={ref}
      style={style}
      {...props}
    >
      {childrenCloned}
    </MenuStyled>
  );
}
