import React, { ReactNode } from 'react';

import {
  CounterIcon as Styled,
  Icon,
  Content,
} from './CounterIcon.style';

import { Tip } from '../../info/Tip/Tip';

import { Paragraph } from '../../../typography';
import { withIris, IrisProps } from '../../../utils';

export const CounterIcon = withIris<HTMLDivElement, Props>(
  CounterIconComponent
);

type Props = IrisProps<
  {
    href?: string;
    icon: ReactNode;
    /**
     * The action that triggers the tooltip to appear
     *
     * [default = 'hover']
     */
    trigger?: 'click' | 'hover';
  },
  HTMLDivElement
>;

function CounterIconComponent({
  children,
  forwardRef,
  href,
  trigger = 'hover',
  icon,
  onClick,
  title,
  ...props
}: Props) {
  return (
    <Styled ref={forwardRef}>
      <Tip
        // href={href}
        onClick={!href && onClick}
        content={title}
        trigger={trigger}
        attach="top"
      >
        <Content
          as={href ? 'a' : 'span'}
          onClick={href && onClick}
          {...props}
        >
          <Icon>{icon}</Icon>
          <Paragraph size="1" element="span">
            {children}
          </Paragraph>
        </Content>
      </Tip>
    </Styled>
  );
}
