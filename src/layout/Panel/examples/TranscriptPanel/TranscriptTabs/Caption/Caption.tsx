import React from 'react';

import { Container, Segment, Paragraph } from './Caption.style';

import { secondsToMinutes } from '../../util';

export function Caption({
  data,
  active = false,
  delay = 0,
  ...props
}: any) {
  const { start, end, height, text } = data;
  return (
    <Container {...props}>
      <Segment active={active} delay={delay}>
        <Timecode start={start} end={end} />
        <Paragraph size="2">height: {height}px</Paragraph>
        <Paragraph size="2">{text}</Paragraph>
      </Segment>
    </Container>
  );
}

function Timecode({ start, end, ...props }) {
  const timecodeStart = secondsToMinutes(start);
  const timecodeEnd = secondsToMinutes(end);

  return (
    <Paragraph size="2" {...props}>
      {timecodeStart} - {timecodeEnd}
    </Paragraph>
  );
}
