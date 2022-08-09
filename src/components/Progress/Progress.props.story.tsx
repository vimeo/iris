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

export function Size({ args }) {
  return (
    <>
      <Progress
        {...args}
        animate={false}
        css={style}
        size="xs"
        value={50}
        variant="primary"
      />
      <Progress
        animate={false}
        css={style}
        size="md"
        value={50}
        variant="primary"
      />
    </>
  );
}
Size.storyName = 'size';

export function Variant({ args }) {
  const [progress] = useSimulateProgress();

  return (
    <>
      <Progress
        css={style}
        value={progress}
        variant="rainbow"
        {...args}
      />
      <Progress css={style} value={progress} variant="primary" />
      <Progress css={style} value={progress} variant="success" />
    </>
  );
}
Variant.storyName = 'variant';

export function Custom() {
  const [progress] = useSimulateProgress();
  const background = 'linear-gradient(to right, red, yellow, red)';

  return (
    <Progress css={style} value={progress} style={{ background }} />
  );
}
Custom.storyname = 'custom';

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
