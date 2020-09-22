import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { rem } from 'polished';

import { Checkmark } from '../../icons';
import { Story } from '../../storybook';
import { blue, green } from '../../color';

export default { title: 'Labs|Uploader/' };

export function Test() {
  return (
    <Story title="test" width="100%" style={{ display: 'flex' }}>
      <FakeUpload />
    </Story>
  );
}

const FakeUpload = ({ children, ...props }) => {
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(1000);

  useInterval(() => {
    if (!paused && progress > 0) {
      setProgress(progress => progress - 1);
    }
  }, 3);

  return (
    <div
      onClick={() => {
        if (progress <= 0) {
          setProgress(1000);
        } else {
          setPaused(paused => !paused);
        }
      }}
    >
      <progress id="file" max="1000" value={progress * -1 + 1000} />
      <br />
      <h3>{paused ? 'PAUSED' : 'ACTIVE'}</h3>
      <h3>{(progress * -1 + 1000) / 10}</h3>
      <br />
      <CircleStyled
        size={120}
        paused={paused}
        progress={progress}
        style={{ margin: '3rem' }}
      />
      <CircleStyled
        size={60}
        paused={paused}
        progress={progress}
        style={{ margin: '3rem' }}
      />
      <CircleStyled
        size={30}
        paused={paused}
        progress={progress}
        style={{ margin: '3rem' }}
      />
      <CircleStyled
        size={15}
        paused={paused}
        progress={progress}
        style={{ margin: '3rem' }}
      />
    </div>
  );
};

const Circle = ({ size = 120, paused, progress, ...props }) => {
  const circumference = size * 4.71;
  progress = (progress / 1000) * circumference;

  return (
    <div {...props}>
      <div>
        <Loader
          size={size}
          paused={paused}
          progress={progress}
          success={progress <= 0}
        />
        {progress >= 0 && (
          <PauseButton
            success={progress <= 0}
            size={size}
            paused={paused}
          />
        )}
        {progress <= 0 && <Check />}
      </div>
    </div>
  );
};

const Loader = ({
  size = 120,
  success,
  paused,
  progress,
  ...props
}) => {
  const circumference = size * 4.71;

  return (
    <LoaderStyled {...props} size={size} success={success}>
      <circle
        id="shape"
        cx={size}
        cy={size}
        r={size * 0.75}
        viewBox={`0 0 ${size * 0.75} ${size * 0.75}`}
        stroke-dasharray={circumference}
        stroke-dashoffset={progress}
        style={{ opacity: paused ? 0.25 : 1 }}
      />
    </LoaderStyled>
  );
};

const LoaderStyled = styled.svg<any>`
  width: ${p => rem(p.size * 2)};
  height: ${p => rem(p.size * 2)};
  transform: rotate(-90deg);

  circle {
    fill: none;
    stroke: ${p => (p.success ? green(500) : blue(500))};
    stroke-width: ${p => rem(p.size * 0.1666)};
    stroke-linecap: round;
    transition: opacity 230ms ease-in-out;
  }
`;

const Check = styled(Checkmark)`
  position: absolute;
  left: -1%;
  transform: rotate(0) scale(0.7) !important;
  transform-origin: 50 50;
  top: 1%;

  * {
    fill: ${green(500)};
    stroke-linecap: round;
  }
`;

const CircleAnimation = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const CircleStyled = styled(Circle)`
  display: inline-block;
  width: ${p => rem(p.size * 2)};
  height: ${p => rem(p.size * 2)};
  position: relative;
  cursor: pointer;
`;

const PauseButton = styled.div<any>`
  position: absolute;
  transform: scale(0.8) rotate(45deg);
  background: ${blue(500)};
  top: 0rem;
  left: 0rem;
  width: ${p => rem(p.size * 2)};
  height: ${p => rem(p.size * 2)};
  transform-origin: 50 50;
  opacity: 0;
  transition: 230ms ease-in-out;
  border-radius: 50%;

  ${p =>
    p.paused &&
    css`
      background: transparent;

      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: ${rem(p.size)} solid transparent;
        border-bottom: ${rem(p.size)} solid transparent;
        border-left: ${rem(p.size * 2)} solid ${blue(500)};
        border-radius: 10%;
      }
    `};

  ${p =>
    !p.success &&
    css`
      ${CircleStyled}:hover & {
        transform: scale(0.3);
        opacity: 1;
        border-radius: 10%;

        ${p.paused &&
          css`
            background: transparent;
          `};
      }
    `};
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
