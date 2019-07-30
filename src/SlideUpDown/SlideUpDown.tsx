import React, {
  useState,
  ReactNode,
  useLayoutEffect,
  useRef,
} from 'react';
import { IrisComponent } from '../Utils';

interface Props {
  animateOpenOnMount?: boolean;
  children: ReactNode;
  isHidden: boolean;
}

export const SlideUpDown: IrisComponent<Props> = ({
  animateOpenOnMount = false,
  children,
  isHidden,
}) => {
  const [maxHeight, setMaxHeight] = useState(0);

  const ref = useRef(null);

  useLayoutEffect(() => {
    // tslint:disable-next-line:no-unused-expression
    !animateOpenOnMount && setMaxHeight(0);
  }, []);

  useLayoutEffect(() => {
    // tslint:disable-next-line:no-unused-expression
    !isHidden && setMaxHeight(ref.current.scrollHeight);
  }, [children]);

  return (
    <div
      ref={ref}
      style={{
        overflowY: 'hidden',
        transition: 'all 200ms ease-in-out',
        maxHeight: isHidden ? 0 : maxHeight,
      }}
    >
      {children}
    </div>
  );
};
