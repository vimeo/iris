import React, { cloneElement, ReactElement } from 'react';

import { Props } from './Tip.types';
import { maxWidth } from './Tip.settings';
import { Tip as Styled } from './Tip.style';

import { usePortal, validate } from '../usePortal';

import { withIris } from '../../../utils';
import { Paragraph } from '../../../typography';
import { useIrisError } from '../../../utils/useIrisError';

export const Tip = withIris<HTMLDivElement, Props>(TipComponent);

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
    typeof children === 'string'
      ? children.length > maxWidth - 2
      : null;

  const { irisError } = useIrisError(
    { ...props },
    Tip,
    'usePortal components require children to accept refs! Please pass correct children to <Tip />!',
    validate(children as any),
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
    { attach, margin: 8, trigger },
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
