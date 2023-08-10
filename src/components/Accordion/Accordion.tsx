import React, { cloneElement, useState } from 'react';

import { withIris } from '../../utils';
import { Item, Minors } from './Accordion.minors';
import { Props } from './Accordion.types';
import { AccordionStyled } from './Accordion.style';

export const Accordion = withIris<HTMLDivElement, Props, Minors>(
  AccordionComponent
);

Accordion.Item = Item;

function AccordionComponent({
  children,
  defaultIndex,
  allowMultiple = true,
  format = 'basic',
}: Props) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  function childClone(child, i) {
    return cloneElement(child, {
      format,
      index: i,
      allowMultiple,
      defaultActive: defaultIndex === i,
      setActiveIndex: ({ index }) => {
        setActiveIndex(index);
      },
      itemActive: !allowMultiple && activeIndex === i,
    });
  }

  return (
    <AccordionStyled>
      {children.length > 1
        ? children.map(childClone)
        : childClone(children, 0)}
    </AccordionStyled>
  );
}
