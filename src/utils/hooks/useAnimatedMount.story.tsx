import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { useMeasure } from './useMeasure';

import { Button } from '../../components';
import { ButtonStyled } from '../../components/buttons/Button/Button.style';
import { Header, Text } from '../../typography';
import styled, { keyframes } from 'styled-components';

export default { title: 'utilties/useAnimatedMount' };

export const Common = () => <CommonStory />;
function CommonStory() {
  const [active, activeSet] = useState(true);

  return (
    <>
      <Button onClick={() => activeSet((active) => !active)}>
        Toggle
      </Button>
      {active && (
        <Box>
          <h1>Hello</h1>
        </Box>
      )}
    </>
  );
}

function useExit(ref, keyframes) {
  useLayoutEffect(() => {
    const refLast = ref?.current;

    return () => {
      const clone = refLast.cloneNode([true]);
      const { top, left } = refLast.getBoundingClientRect();

      const container = document.createElement('div');

      container.style.position = 'absolute';
      container.style.top = top + 'px';
      container.style.left = left + 'px';
      container.style.zIndex = '99999';

      document.body.appendChild(container);

      clone.style.margin = 0;
      clone.style.animation = false;

      container.appendChild(clone);

      const animation = container.animate(...keyframes);

      animation.finished.then(() => {
        container.remove();
      });
    };
  }, []);
}

function Box(props) {
  const ref = useRef(null);

  const keyframes = [
    [
      {
        opacity: 1,
        transform: 'translateX(0) scale(1) rotate(0deg)',
      },
      {
        opacity: 0,
        transform: 'translateX(300%) scale(0.95) rotate(10deg)',
      },
    ],
    {
      duration: 3000,
      easing: 'ease-in-out',
    },
  ];

  useExit(ref, keyframes);

  return (
    <BoxStyled
      {...props}
      ref={ref}
      style={{
        width: '10rem',
        height: '10rem',
        margin: '5rem',
        background: 'blue',
        padding: '1rem',
        color: 'white',
      }}
    />
  );
}

const fadeIn = keyframes`
  0%{ 
    opacity: 0;
    transform: translateX(300%) scale(0.95) rotate(10deg);
  }

  100% { 
    opacity: 1;
    transform: translateX(0) scale(1) rotate(0);
  }
`;

const BoxStyled = styled.div`
  animation: 3000ms ${fadeIn} ease-in-out;
`;
