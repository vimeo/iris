import React from 'react';
import { Story } from '@storybook/react';

import { Accordion } from './Accordion';
import { Props } from './Accordion.types';
import styled from 'styled-components';
import { Gear } from '../../icons';
import { rem } from 'polished';

export default {
  title: 'components/Accordion',
  component: Accordion,
};

const Template: Story<Props> = (args) => {
  return (
    <Container>
      <Accordion {...args}>
        <Accordion.Item title="Accordion item 1">
          Accordion content
        </Accordion.Item>
        <Accordion.Item title="Accordion item 2">
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
`;

export const Controls = Template.bind({});
Controls.storyName = 'Accordion';
