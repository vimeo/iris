import React from 'react';

import { Annotation as Styled } from './Annotation.style';

import { Tip } from '../Tip/Tip';
import { CircleInfo } from '../../../icons';
import { Button } from '../../buttons/Button/Button';

import { withIris, IrisProps, AttachAlias } from '../../../utils';

export const Annotation = withIris<HTMLDivElement, Props>(
  AnnotationComponent
);

export type Props = IrisProps<
  {
    /**
     * The `content` defines what will appear inside the portal component,
     * whereas the `children` defines what the portal component is anchored to.
     *
     * This portal tooltip will appear to the top of the anchor.
     */
    content?: string;
    /**
     * Position where tooltip appears.
     *
     * [default = 'top']
     */
    attach?: AttachAlias;
  },
  HTMLDivElement
>;

function AnnotationComponent({
  children,
  content,
  attach = 'top',
  forwardRef,
  ...props
}: Props) {
  return (
    <Styled ref={forwardRef}>
      {children}
      <Tip attach={attach} content={content} {...props}>
        <Button
          element="span"
          size="xs"
          format="basic"
          variant="hyperminimal"
          icon={<CircleInfo />}
        />
      </Tip>
    </Styled>
  );
}
