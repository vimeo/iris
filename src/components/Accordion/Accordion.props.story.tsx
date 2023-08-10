import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Accordion } from './Accordion';

export default {
  title: 'components/Accordion/props',
  component: Accordion,
  argTypes: {
    allowMultiple: { control: { disable: true } },
    defaultIndex: { control: { disable: true } },
    format: { control: { disable: true } },
  },
};

const formats = ['basic', 'secondary'];

export function Formats({ args }) {
  return (
    <Container>
      {formats.map((format, i) => (
        <Accordion key={i} format={format} {...args}>
          <Accordion.Item title={`Accordion format: ${format}`}>
            Accordion content
          </Accordion.Item>
        </Accordion>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
`;
