import React from 'react';

import { Annotation as Styled, Icon } from './Annotation.style';

import { Tip } from '../Tip/Tip';

import { withIris, IrisProps } from '../../../utils';

export const Annotation = withIris<HTMLDivElement, Props>(
  AnnotationComponent,
);

type Props = IrisProps<
  {
    /**
     * The `content` defines what will appear inside the portal component,
     * whereas the `children` defines what the portal component is anchored to.
     *
     * This portal tooltip will appear to the top of the anchor.
     */
    content?: string;
  },
  HTMLDivElement
>;

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
