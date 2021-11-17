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
import { Caret } from './Caret';

import { Header, Paragraph } from '../../../typography';
import { Button } from '../../buttons/Button/Button';
import {
  Anchor,
  useAnchor,
} from '../../../utils/hooks/useAnchor/useAnchor';
import { usePortal, capitalize } from '../../../utils';

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

  const side = attach.split('-')[0] || attach;
  const marginSide = 'margin' + capitalize(side);
  const margin = '1rem';

  const zIndex = style?.zIndex || 6000;

  const clipPath = makeClipPaths(attach);
  console.log({ clipPath });

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
function makeClipPaths(attach) {
  const [side, placement] = attach.split('-');
  const axis = side === 'left' || side === 'right' ? 'X' : 'Y';

  const TL = side === 'left' || side === 'top';

  const sign = TL ? 1 : -1;
  const operator = TL ? '+' : '-';
  const end = TL ? '0%' : '100%';

  const distance = 0.67 * sign * -1 + 'rem';
  const inset = `calc(${end} ${operator} 1rem)`;
  const translate = `translate${axis}(${distance})`;

  const [A, B, Tip] = makeVertices(placement, side, inset);
  const clipPath = `polygon(${A}, ${Tip}, ${B})`;

  return {
    '--caret-translate': translate,
    '--caret-clip-path': clipPath,
  };
}

function makeVertices(placement, side, inset) {
  const TL = placement === 'left' || placement === 'top';
  const end = TL ? '0%' : '100%';
  const sign = TL ? 1 : -1;

  const points = makePoints(placement, sign, end);

  return points.map((point, i) => {
    const tip = i === 2;
    const outset = inset.replace('1rem', '0rem');

    return tip
      ? makeVertex(side, outset, point)
      : makeVertex(side, inset, point);
  });
}

function makeVertex(side, X, Y) {
  return side === 'left' || side === 'right'
    ? `${X} ${Y}`
    : `${Y} ${X}`;
}

function makePoints(placement, sign, end) {
  if (!placement) {
    return [
      'calc(50% + 1rem)',
      'calc(50% - 1rem)',
      'calc(50% + 0rem)',
    ];
  } else {
    return [
      `calc(${end} + ${sign * 1.25}rem)`,
      `calc(${end} + ${sign * 3.25}rem)`,
      `calc(${end} + ${sign * 2.25}rem)`,
    ];
  }
}
