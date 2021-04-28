import React from 'react';

import { Container, Segment, Paragraph } from './Caption.style';

export function Caption({
  data,
  active = false,
  delay = 0,
  ...props
}: any) {
  const { start, end, text } = data;
  return (
    <Container {...props}>
      <Segment active={active} delay={delay}>
        <Timecode start={start} end={end} />
        <Paragraph size="2">{text}</Paragraph>
      </Segment>
    </Container>
  );
}

function Timecode({ start, end, ...props }) {
  return (
    <Paragraph size="2" {...props}>
      {start} - {end}
    </Paragraph>
  );
}
