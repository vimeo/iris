import React, { useRef } from 'react';
import styled from 'styled-components';

import { Ribbon } from '../Ribbon/Ribbon';
import { IrisProps, withIris, geometry } from '../../utils';
import { Sizes } from '../../themes';

export const Progress = withIris<HTMLDivElement, Props>(
  ProgressComponent
);

export type Props = IrisProps<{
  /**
   * Looping cycle animation of gradient background.
   *
   * [default = false]
   */
  animate?: boolean;
  /**
   * Current value of progress bar 0 - 100.
   */
  value: number;
  /**
   * [default = 'rainbow']
   */
  variant?: 'primary' | 'success' | 'rainbow';
  /**
   * [default = 'md']
   */
  size?: Sizes;
}>;

function ProgressComponent({
  animate,
  value,
  forwardRef,
  variant = 'rainbow',
  size = 'md',
  style,
  ...props
}: Props) {
  const ref = useRef(null);
  const { width } = geometry(ref.current) ?? {};
  const { background } = style ?? {};

  const ARIAprops = {
    'aria-valuenow': value,
    'aria-valuemin': 0,
    'aria-valuemax': 100,
  };

  return (
    <Background
      ref={ref}
      style={{ ...style, background: bgGradient }}
      {...props}
    >
      <Boundary style={{ width: value + '%' }}>
        <Ribbon
          animate={animate}
          ref={forwardRef}
          role="progressbar"
          style={{ width, background }}
          variant={variant}
          {...ARIAprops}
        />
      </Boundary>
    </Background>
  );
}

const bgGradient = 'linear-gradient(to right, #908994, #adb4be)';

const Background = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background: ${bgGradient};
`;

const Boundary = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  transition: 30ms linear;
`;
