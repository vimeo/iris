import React, { cloneElement, ReactElement } from 'react';

import { Props } from './Tip.types';
import { maxWidth } from './Tip.settings';
import { Tip as Styled } from './Tip.style';

import {
  withIris,
  usePortal,
  validate,
  useIrisError,
  SimpleAnimation,
} from '../../../utils';
import { Paragraph } from '../../../typography';

export const Tip = withIris<HTMLDivElement, Props>(TipComponent);

const animation: SimpleAnimation = {
  enter: { opacity: 1, transform: 'translateY(0)' },
  exit: { opacity: 0, transform: `translateY(5%)` },
};

const error =
  'usePortal components require children to accept refs! Please pass correct children to <Tip />!';

function TipComponent({
  attach = 'top',
  content,
  children,
  forwardRef,
  trigger = 'hover',
  variant = 'simple',
  ...props
}: Props) {
  const margin = variant === 'speech-bubble' ? 18 : 8;
  const [wrap, tipContent] = contentStyle(content);

  const [TipElement, anchor] = usePortal(
    <Styled
      attach={attach}
      ref={forwardRef}
      variant={variant}
      $wrap={wrap}
      {...props}
      children={tipContent}
    />,
    { attach, animation, margin, trigger }
  );

  const validity = validate(children as any);
  const { irisError } = useIrisError(props, Tip, error, validity);
  if (irisError) return <div {...irisError}>{children}</div>;

  return (
    <>
      {TipElement}
      {cloneElement(children as ReactElement, anchor)}
    </>
  );
}

function contentStyle(content) {
  switch (typeof content) {
    case 'string': {
      const wrap = content.length > maxWidth - 2;
      const children = (
        <Paragraph size="2" style={{ margin: 0 }}>
          {content}
        </Paragraph>
      );

      return [wrap, children];
    }
    default: {
      return [null, content];
    }
  }
}
