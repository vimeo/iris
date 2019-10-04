import React, { ReactNode, SFC } from 'react';

import { TipOverlay } from '../TipOverlay/TipOverlay';
import { AnnotationStyled, IconWrapper } from './AnnotationStyled';

import { CircleInfo } from '../../../icons';

interface Props {
  children?: ReactNode;
  labelType?: 'textBlock' | 'inline' | 'noPosition'; // DEPRECATE?
  tooltipText: string;
  size?: 'md' | 'lg'; // DEPRECATE?
  tooltipProps?: {};
}

export const Annotation: SFC<Props> = ({
  children,
  labelType = 'inline',
  size = 'md',
  tooltipText,
  tooltipProps,
  ...props
}) => (
  <AnnotationStyled {...props}>
    {children}
    <IconWrapper labelType={labelType}>
      <TipOverlay
        {...tooltipProps}
        tooltipText={tooltipText}
        triggerOnClick={false}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <CircleInfo />
      </TipOverlay>
    </IconWrapper>
  </AnnotationStyled>
);
