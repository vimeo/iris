import React, { MouseEventHandler } from 'react';

import {
  Wrapper,
  Card,
  Text,
  CirclePlus,
  Content,
} from './NewItemCard.style';

import { Focus, IrisProps, withIris } from '../../utils';

export const NewItemCard = withIris<HTMLDivElement, Props>(
  NewItemCardComponent
);

type DOMElement = HTMLAnchorElement | HTMLDivElement;

export type Props = IrisProps<
  {
    children: string | string[];
    /**
     * Sets or retrieves a destination URL or an anchor point.
     */
    href?: string;
    rel?: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target?: string;
    onClick?: MouseEventHandler<DOMElement>;
  },
  HTMLDivElement
>;

function NewItemCardComponent({
  children,
  forwardRef,
  href,
  onClick,
  rel,
  target,
  ...props
}: Props) {
  const as = href ? 'a' : 'button';

  return (
    <Wrapper ref={forwardRef} {...props}>
      <Card
        as={as}
        href={href}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        <Content>
          <CirclePlus />
          <Text>{children}</Text>
        </Content>
      </Card>
      <Focus parent={Card} distance={8} />
    </Wrapper>
  );
}
