import React from 'react';

import { Tip } from '../Tip/Tip';

import { withIris, IrisProps } from '../../../utils';
import { Annotation as Styled, Icon } from './Annotation.style';

export const Annotation = withIris<HTMLDivElement, Props>(
  AnnotationComponent,
);

type Props = IrisProps<{ content?: string }, HTMLDivElement>;

function AnnotationComponent({
  children,
  content,
  forwardRef,
  ...props
}: Props) {
  return (
    <Styled ref={forwardRef}>
      {children}
      <Tip attach="top" content={content} {...props}>
        <Icon />
      </Tip>
    </Styled>
  );
}
