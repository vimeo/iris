import React, {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { css } from 'styled-components';

import { Progress } from './Progress';

export default {
  title: 'components/Progress/props',
  component: Progress,
};

const style = css`
  margin: 1rem 1rem;
  width: 50%;
`;

export function Variant() {
  const [progress] = useSimulateProgress();

  return (
    <>
      <Progress css={style} value={progress} variant="rainbow" />
      <Progress css={style} value={progress} variant="primary" />
      <Progress css={style} value={progress} variant="success" />
    </>
  );
}

export function Custom() {
  const [progress] = useSimulateProgress();
  const background = 'linear-gradient(to right, red, yellow, red)';

  return (
    <Progress css={style} value={progress} style={{ background }} />
  );
}

function useSimulateProgress(): [
  number,
  Dispatch<SetStateAction<number>>
] {
  const [progress, progressSet] = useState(0);

  useEffect(() => {
    const cycle = () => progressSet((p) => (p === 100 ? 0 : p + 1));
    const timer = setTimeout(cycle, 30);
    return () => clearTimeout(timer);
  });

  return [progress, progressSet];
}
