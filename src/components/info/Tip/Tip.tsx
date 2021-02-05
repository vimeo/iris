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

function TipComponent({
  attach = 'top',
  breakWords = false,
  content,
  children,
  forwardRef,
  pill,
  trigger = 'hover',
  ...props
}: Props) {
  const wrap =
    typeof content === 'string'
      ? content.length > maxWidth - 2
      : null;

  const { irisError } = useIrisError(
    { ...props },
    Tip,
    'usePortal components require children to accept refs! Please pass correct children to <Tip />!',
    validate(children as any)
  );

  const [TipElement, anchor] = usePortal(
    <Styled
      wrap={wrap}
      ref={forwardRef}
      breakWords={breakWords}
      pill={pill}
      {...props}
    >
      <div>
        <Paragraph size="2" style={{ margin: 0 }}>
          {content}
        </Paragraph>
      </div>
    </Styled>,
    { attach, animation, margin: 8, trigger }
  );

  if (irisError) return <div {...irisError}>{children}</div>;

  return (
    <>
      {TipElement}
      {cloneElement(children as ReactElement, {
        ...anchor,
      })}
    </>
  );
}
