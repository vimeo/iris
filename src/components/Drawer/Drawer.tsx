import React from 'react';
import { DrawerProps, Minors } from './Drawer.types';
import { AnimatePresence, motion } from 'framer-motion';
import { withIris } from '../../utils';
import { DrawerContainer } from './Minors/DrawerContainer';
import { getAnimation } from './util';

const DrawerComponent = ({
  placement,
  isOpen,
  size = 'md',
  // autoFocus,
  // initialFocusRef,
  // finalFocusRef,
  // returnFocusOnClose,
  // preserveScrollBarGap,
  children,
}: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div {...getAnimation(size, placement)}>
          <DrawerContainer size={size} placement={placement}>
            {children}
          </DrawerContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Drawer = withIris<HTMLDivElement, DrawerProps, Minors>(
  DrawerComponent
);
