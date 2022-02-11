import React, {
  cloneElement,
  useContext,
  useRef,
  MouseEvent,
} from 'react';

import type { Props } from './TourPoint.types';
import { Footer, Steps, TourPointStyled } from './TourPoint.style';
import { TourContext } from './TourPoint.context';
import { Motion } from './TourPoint.motion';
import { Caret, buildClipPaths } from './Caret';

import { Header, Paragraph } from '../../typography';
import { Button } from '..//Button/Button';
import {
  Anchor,
  useAnchor,
} from '../../utils/hooks/useAnchor/useAnchor';
import { usePortal, capitalize } from '../../utils';

TourPoint.Motion = Motion;

const lessThan = (a: number, b: number) => a < b && a;
const greaterThan = (a: number, b: number) => a > b || a;

export function TourPoint({
  active = true,
  alt = null,
  attach = 'left',
  children,
  confirmation = 'Got it',
  dismission = 'Dismiss',
  content,
  onClose,
  src,
  step,
  style,
  title,
  ...props
}: Props) {
  const {
    active: index,
    activeSet: indexSet,
    automated,
    steps,
  } = useContext(TourContext);

  const ref = useRef(null);
  const refAnchor = useRef(null);
  const childrenClone = cloneElement(children, { ref });
  const propsAnchor = useAnchor(ref, attach, active);

  const Image = src && <img src={src} alt={alt} />;
  const Title = title && <Header size="3">{title}</Header>;

  const Content = slotProgressive(content, <Paragraph size="1" />);

  function stepFn(direction, increment = 0, compare = null) {
    const next = compare ? compare(index + increment, steps) : null;

    return (event: MouseEvent) => {
      if (automated) {
        onClose?.(event, { direction });
        indexSet(next);
      }
    };
  }

  const stepBack = stepFn('back', -1, lessThan);
  const stepNext = stepFn('next', 1, greaterThan);
  const dismiss = stepFn('dismiss');

  const Confirm = slotProgressive(
    confirmation,
    <Button onClick={stepNext} />
  );

  const Dismiss = slotProgressive(
    dismission,
    <Button variant="minimalTransparent" onClick={dismiss} />
  );

  const clipPath = buildClipPaths(attach);

  const side = attach.split('-')[0] || attach;
  const marginSide = 'margin' + capitalize(side);
  const margin = '1rem';

  const zIndex = style?.zIndex || 6000;

  const childrenPortal = usePortal(
    <Anchor zIndex={zIndex} {...propsAnchor}>
      <Motion attach={attach}>
        <TourPointStyled
          style={{
            ...style,
            ...clipPath,
            [marginSide]: margin,
          }}
          ref={refAnchor}
          {...props}
        >
          {Image}
          {Title}
          {Content}

          <Footer>
            {steps && (
              <Steps onClick={stepBack}>
                Step {step} of {steps}
              </Steps>
            )}
            {Dismiss}
            {Confirm}
          </Footer>
          <Caret attach={attach} />
        </TourPointStyled>
      </Motion>
    </Anchor>
  );

  return (
    <>
      {childrenClone}
      {childrenPortal}
    </>
  );
}

function slotProgressive(children, Wrapper) {
  const ProgressiveElement =
    typeof children === 'string' || typeof children === 'number'
      ? cloneElement(Wrapper, { children })
      : children;

  return ProgressiveElement;
}
