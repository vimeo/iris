import React, { ReactNode, useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { IrisComponent } from '../../../utils';

interface Props {
  className?: string;
  children: ReactNode;
  maxHeight: number;
}

export const OverflowTruncationWrapper: IrisComponent<Props> = ({
  children,
  ...props
}) => {
  const wrapperEl = useRef(null);
  const innerEl = useRef(null);

  const [isTruncated, setIsTruncated] = useState(false);
  const [maxHeight, setMaxHeight] = useState(props.maxHeight);

  let truncate = () => {
    setIsTruncated(
      wrapperEl.current.clientHeight < innerEl.current.clientHeight,
    );
    setMaxHeight(
      innerEl.current.clientHeight < props.maxHeight
        ? innerEl.current.clientHeight
        : props.maxHeight,
    );
  };

  useEffect(() => {
    truncate = throttle(truncate, 200);
    truncate();
    window.addEventListener('resize', truncate);
    return () => {
      window.removeEventListener('resize', truncate);
    };
  }, []);

  return (
    <div
      {...props}
      style={{
        position: 'relative',
        height: `${maxHeight}px`,
      }}
      ref={wrapperEl}
    >
      <Position isTruncated={isTruncated}>
        <div
          style={{
            overflow: 'auto',
            maxHeight: `${maxHeight}px`,
          }}
        >
          <div ref={innerEl}>{children}</div>
        </div>
      </Position>
    </div>
  );
};

const Position = styled.div<{ isTruncated: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;

  ${props =>
    props.isTruncated &&
    css`
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 10%,
          rgba(255, 255, 255, 0) 100%
        );
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${rem(6)};
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.08) 0%,
            rgba(0, 0, 0, 0)
          )
          0 100%;
      }
    `};
`;
