import React from 'react';

import { Wrapper, Styled } from './ProgressBar.style';
import { Sizes, Formats } from './ProgressBar.types';

import { withIris, IrisProps, useIrisError } from '../../../utils';

export const ProgressBar = withIris<HTMLDivElement, Props>(
  ProgressBarComponent,
);

type Props = IrisProps<{
  animated?: boolean;
  value: number;
  format: Formats;
  size: Sizes;
}>;

function ProgressBarComponent({
  animated,
  value,
  format = 'neutral',
  forwardRef,
  size = 'md',
  ...props
}: Props) {
  const { irisError } = useIrisError(
    props,
    ProgressBar,
    `\`value="${value}"\` was specified. Please specify a number between 0 and 100.`,
    value >= 0 && value <= 100,
  );

  const progressWidth = format === 'empty' && animated ? 100 : value;

  return (
    <Wrapper
      ref={forwardRef}
      format={format}
      size={size}
      {...props}
      {...irisError}
    >
      <Styled
        animated={animated}
        value={value}
        format={format}
        size={size}
        style={{ width: progressWidth + '%' }}
        role="progressbar"
        ariaValuenow={value}
        ariaValuemin={0}
        ariaValuemax={100}
      />
    </Wrapper>
  );
}
