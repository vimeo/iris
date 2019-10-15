import React, {
  useState,
  ReactNode,
  useLayoutEffect,
  useRef,
} from 'react';

import { withIris, IrisProps } from '../../utils';

export const SlideUpDown = withIris<HTMLDivElement, Props>(
  SlideUpDownComponent,
);

type Props = IrisProps<{
  animateOpenOnMount?: boolean;
  children: ReactNode;
  isHidden: boolean;
}>;

function SlideUpDownComponent({
  animateOpenOnMount = false,
  forwardRef,
  children,
  isHidden,
  ...props
}: Props) {
  const ref = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    if (!isHidden) setMaxHeight(ref.current.scrollHeight);
  }, [children, isHidden]);

  useLayoutEffect(() => {
    if (!animateOpenOnMount) setMaxHeight(0);
  }, [animateOpenOnMount]);

  return (
    <div
      ref={ref}
      style={{
        overflowY: 'hidden',
        transition: 'all 200ms ease-in-out',
        maxHeight: isHidden ? 0 : maxHeight,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
