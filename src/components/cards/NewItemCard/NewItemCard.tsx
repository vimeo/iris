import React, { MouseEventHandler } from 'react';

import { Wrapper, Card, Anchor } from './NewItemCard.style';

import { CirclePlus } from '../../../icons';
import { Paragraph } from '../../../typography';
import { Focus, IrisProps, withIris } from '../../../utils';

export const NewItemCard = withIris<HTMLDivElement, Props>(
  NewItemCardComponent
);

type Props = IrisProps<
  {
    children: string;
    href?: string;
    rel?: string;
    /**
     * Whether to open link in new tab or window
     *
     * Ex: target="_blank"
     */
    target?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
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
  return (
    <Wrapper ref={forwardRef} {...props}>
      <Card>
        <Anchor
          href={href}
          onClick={onClick}
          rel={rel}
          target={target}
        >
          <span>
            <CirclePlus />
          </span>
          <Paragraph size="2">{children}</Paragraph>
          <Focus parent={Anchor} distance={8} />
        </Anchor>
      </Card>
    </Wrapper>
  );
}
