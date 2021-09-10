import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import { generateUID } from '../../../utils';

type Axis = 'X' | 'Y';
type Invert = -1 | 1;

export function Motion({
  attach,
  children,
  duration = 0.667,
  delay = 0,
}) {
  const UID = useMemo(() => generateUID(), []);

  attach = attach || children.props.attach;

  const [side, _] = attach.split('-');

  const type = 'spring';
  const bounce = (0.667 + (1 - 0.667 / duration)) / 2;

  const durOpacity = 0.5 + duration * 1.33;
  const durOpacityExit = 0.1 + duration * 0.67;
  const durTransformExit = duration * 0.9;

  function makeExits(axis: Axis, invert: Invert) {
    const a = invert * 2;
    const translate = (amount) => `translate${axis}(${amount}%)`;

    const b = invert * 0.5;
    const rotate = (amount) => `rotate(${amount}deg)`;

    const opacity = 0;
    const transform = `${translate(a)} scale(0.9) ${rotate(b)}`;

    const transition = {
      transform: { delay, type, bounce, duration: durTransformExit },
      opacity: { delay, type, bounce: 0, duration: durOpacityExit },
    };

    return { opacity, transform, transition };
  }

  const axis = side === 'top' || side === 'bottom' ? 'Y' : 'X';
  const invert = side === 'top' || side === 'left' ? -1 : 1;

  const enter = makeTransforms(axis, invert);
  const exit = makeExits(axis, invert);

  const transition = {
    transform: { delay, type, bounce, duration },
    opacity: { delay, type, duration: durOpacity },
  };

  const initial = { opacity: 0, ...enter[1], transition };
  const animate = { opacity: 1, ...enter[0], transition };

  const variants = { initial, animate, exit };

  return (
    <motion.div
      key={UID}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ transformOrigin: 'center' }}
    >
      {children}
    </motion.div>
  );
}

function makeTransforms(axis, invert) {
  const translate = (amount) => `translate${axis}(${amount}%)`;
  const a = invert * 9;

  return [
    { transform: `${translate(0)} scale(1) rotate(0deg)` },
    { transform: `${translate(a)} scale(0.98) rotate(0deg)` },
  ];
}
