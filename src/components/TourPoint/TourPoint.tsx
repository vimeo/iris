import React, { cloneElement, useContext, MouseEvent } from 'react';

import type { Props, Attach } from './TourPoint.types';
import { Footer, Steps, TourPointStyled } from './TourPoint.style';
import { TourContext } from './TourPoint.context';
import { Motion } from './TourPoint.motion';
import { Caret, buildClipPaths } from './Caret';

import { Header, Paragraph } from '../../typography';
import { Button } from '../Button/Button';
import { capitalize } from '../../utils';
import {
  Popover,
  PopoverAlign,
  PopoverPosition,
} from 'react-tiny-popover';

TourPoint.Motion = Motion;

const lessThan = (a: number, b: number) => a < b && a;
const greaterThan = (a: number, b: number) => a > b || a;

type compareFn = (nextIndex, totalSteps) => number | boolean;

export function TourPoint({
  active,
  content,
  children,
  // legacy
  attach,
  positions,
  align,
  style,
  src,
  alt = '',
  title,
  onClose,
  confirmation = 'Got it',
  dismission = 'Dismiss',
  getStepsTranslation,
  step = 0,
  ...props
}: Props) {
  const {
    active: index,
    activeSet: indexSet,
    automated,
    steps,
  } = useContext(TourContext);

  let pos = positions;
  let alignment = align;
  let clipPaths = {};
  let margin = {};
  const marginSize = '1rem';
  if (attach && !positions) {
    [pos, alignment] = convertAttachToPositionAlign(attach);
    clipPaths = buildClipPaths(attach);
    const [side] = attach.split('-');
    const marginSide = 'margin' + capitalize(side);
    margin = { [marginSide]: marginSize };
  }

  const Image = src && <img src={src} alt={alt} />;
  const Title = title && <Header size="3">{title}</Header>;
  const Content = slotProgressive(content, <Paragraph size="1" />);

  function stepFn(direction, increment = 0, compare?: compareFn) {
    const next = compare
      ? compare((index || 0) + increment, steps)
      : null;

    return (event: MouseEvent) => {
      if (automated) {
        onClose?.(event, { direction });
        indexSet?.(next);
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

  return (
    <Motion attach={attach}>
      <Popover
        isOpen={!!active}
        positions={pos}
        align={alignment}
        containerStyle={{
          // Added so this is rendered on the same plane as useAnchor currently is.
          // This should be removed once useAnchor is totally deprecated.
          zIndex: '5000',
        }}
        content={
          <TourPointStyled
            style={{
              ...style,
              ...clipPaths,
              ...margin,
            }}
            {...props}
          >
            {Image}
            {Title}
            {Content}
            <Footer>
              {steps && (
                <Steps onClick={stepBack}>
                  {getStepsTranslation
                    ? getStepsTranslation({
                        currentStep: step,
                        totalSteps: steps,
                      })
                    : `Step ${step} of ${steps}`}
                </Steps>
              )}
              {Dismiss}
              {Confirm}
            </Footer>
            <Caret attach={attach} />
          </TourPointStyled>
        }
      >
        {children}
      </Popover>
    </Motion>
  );
}

function convertAttachToPositionAlign(
  attach: Attach
): [PopoverPosition[], PopoverAlign] {
  const [side, placement] = attach.split('-');

  let position: PopoverPosition = 'right';
  switch (side) {
    case 'bottom':
      position = 'top';
      break;
    case 'right':
      position = 'left';
      break;
    case 'top':
      position = 'bottom';
      break;
    default:
      break;
  }

  let align: PopoverAlign = 'center';
  switch (placement) {
    case 'top':
    case 'left':
      align = 'start';
      break;
    case 'bottom':
    case 'right':
      align = 'end';
      break;
    default:
      break;
  }

  return [[position], align];
}

function slotProgressive(children, Wrapper) {
  const ProgressiveElement =
    typeof children === 'string' || typeof children === 'number'
      ? cloneElement(Wrapper, { children })
      : children;

  return ProgressiveElement;
}
