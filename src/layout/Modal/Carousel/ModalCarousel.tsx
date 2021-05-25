import React, { cloneElement, useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

import { Props } from './ModalCarousel.types';
import { Minors, Controls } from '../Modal.minors';
import { Button } from '../../../components';

import {
  withIris,
  Attach,
  usePortal,
  SimpleAnimation,
} from '../../../utils';
import { ChevronRight } from '../../../icons';

export const ModalCarousel = withIris<HTMLDivElement, Props, Minors>(
  ModalCarouselComponent
);

const animation: SimpleAnimation = {
  enter: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  exit: {
    opacity: 0,
    transform: `translateY(-15%)`,
  },
};

const sizes = {
  sm: 340,
  md: 440,
  lg: 660,
};

function ModalCarouselComponent({
  active,
  content,
  children,
  forwardRef,
  onOpen,
  onClose,
  onPrev,
  onNext,
  total = 1,
  activeModal = 0,
  size = 'md',
  ...props
}: Props) {
  const attach: Attach = [
    [50, 50],
    [50, 50],
  ];

  const width =
    typeof size === 'object' && size.width
      ? size.width
      : size === 'sm' || size === 'md' || size === 'lg'
      ? sizes[size]
      : sizes['md'];

  useLayoutEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 37 && activeModal > 0) {
        onPrev && onPrev();
      }
      if (e.keyCode === 39 && activeModal < total - 1) {
        onNext && onNext();
      }
    }
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onPrev, onNext, activeModal]);

  const [Modal, anchor] = usePortal(
    <Wrapper width={width}>
      <Left
        icon={<ChevronLeft />}
        format="basic"
        variant="transparent"
        size="xl"
        tabIndex={0}
        onClick={onPrev}
        disabled={activeModal <= 0}
      />
      <Right
        icon={<ChevronRight />}
        format="basic"
        variant="transparent"
        size="xl"
        tabIndex={0}
        onClick={onNext}
        disabled={activeModal >= total - 1}
      />
      <ModalStyled ref={forwardRef} width={width} {...props}>
        <>{content}</>
      </ModalStyled>
    </Wrapper>,
    {
      attach,
      animation,
      screen: true,
      anchorToWindow: true,
      onOpen,
      onClose,
      forceActive: active,
    }
  );

  return (
    <>
      {Modal && (
        <Controls.Provider value={{ close: anchor.onClick }}>
          {Modal}
        </Controls.Provider>
      )}
      {children && cloneElement(children, anchor)}
    </>
  );
}

const fadeIn = keyframes`
  0% {
    transform: translateY(2rem) scale(0.98);
    opacity: 0;
  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const ChevronLeft = styled(ChevronRight)`
  transform: rotate(180deg);
`;

const Right = styled(Button)`
  width: ${rem(50)};
  height: ${rem(50)};
  position: absolute;
  z-index: 4001;
  top: calc(50% - ${rem(25)});
  right: 0;
  animation: ${fadeIn} 300ms ease-in-out;

  svg {
    font-weight: 800;
    width: 100%;
    height: 100%;
  }

  path {
    fill: white;
  }
`;

const Left = styled(Right)`
  left: 0;
  right: unset;
`;

const ModalStyled = styled.div<{ width: number }>`
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  z-index: 4000;
  width: ${(p) => rem(p.width)};
  animation: ${fadeIn} 300ms ease-in-out;
  transition: 80ms ease-in-out;
`;

const Wrapper = styled.div<{ width: number }>`
  width: ${(p) => rem(p.width + 140)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
