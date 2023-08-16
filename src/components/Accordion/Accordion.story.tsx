import React from 'react';
import { Story } from '@storybook/react';

import { Accordion } from './Accordion';
import { Props } from './Accordion.types';
import styled from 'styled-components';
import { Gear } from '../../icons';
import { rem } from 'polished';
import { core } from '../../tokens';
import { Layout } from '../../storybook';

export default {
  title: 'components/Accordion',
  component: Accordion,
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args}>
        <Accordion.Item
          title="Accordion item title"
          subcopy="Subcopy text"
        >
          Accordion content
        </Accordion.Item>
        <Accordion.Item
          title="Accordion item with icon"
          icon={<GearIcon />}
        >
          Accordion content
        </Accordion.Item>
        <Accordion.Item
          title="Disabled accordion item"
          disabled={true}
        >
          Accordion content
        </Accordion.Item>
        <Accordion.Item
          title="Accordion item with error"
          hasError={true}
        >
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
};

const GearIcon = styled(Gear)`
  width: ${rem(22)};
  margin-right: ${rem(10)};
  path {
    fill: ${core.color.text.primary};
  }
`;

export const Controls = Template.bind({});
Controls.storyName = 'Accordion';
