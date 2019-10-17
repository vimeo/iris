import React, { cloneElement, ReactNode, ReactElement } from 'react';

import { maxWidth } from './Tip.settings';
import { Tip as Styled } from './Tip.style';

import { usePortal, validate } from '../usePortal';
import { Attach, AttachAlias } from '../AnchoredComponent';

import { withIris, IrisProps } from '../../../utils';
import { Paragraph } from '../../../typography';
import { useIrisError } from '../../../utils/useIrisError';

export const Tip = withIris<HTMLDivElement, Props>(TipComponent);

type Props = IrisProps<{
  attach?: Attach | AttachAlias;
  breakWords?: boolean;
  children: ReactElement | string;
  content?: ReactNode;
  trigger?: 'click' | 'hover';
}>;

function TipComponent({
  attach = 'top',
  breakWords = false,
  content,
  children,
  forwardRef,
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
