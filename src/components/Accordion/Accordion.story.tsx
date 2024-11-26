import React from 'react';
import { Story } from '@storybook/react';

import { Accordion } from './Accordion';
import { Props } from './Accordion.types';
import styled, { css } from 'styled-components';
import {
  FlagFilled,
  Fullscreen,
  FullscreenOff,
  Gear,
} from '../../icons';
import { rem } from 'polished';
import { core } from '../../tokens';
import { Layout } from '../../storybook';
import { Input } from '../../components/inputs/Input/Input';

export default {
  title: 'components/Accordion',
  component: Accordion,
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical center>
      <Accordion {...args}>
        <Accordion.Item
          title="Accordion item with inputs"
          subcopy="Subcopy text"
        >
          <InputContainer>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </InputContainer>
        </Accordion.Item>
        <Accordion.Item
          title="Accordion item with error"
          hasError={true}
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
          title="Accordion item with custom header icon"
          icon={<GearIcon />}
        >
          Accordion content
        </Accordion.Item>
        <Accordion.Item
          title="Accordion item with custom trigger icons"
          iconToTriggerOpen={<FullscreenIcon />}
          iconToTriggerClose={<FullscreenOffIcon />}
        >
          Accordion content
        </Accordion.Item>
        <Accordion.Item
          title="Accordion item with custom warning icon"
          hasError={true}
          errorIcon={<FlagFilledIcon />}
        >
          Accordion content
        </Accordion.Item>
      </Accordion>
    </Layout.StoryVertical>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  padding: ${rem(20)} ${rem(10)};
`;

const iconStyle = css`
  width: ${rem(22)};
  path {
    fill: ${core.color.text.primary};
  }
`;

const GearIcon = styled(Gear)`
  ${iconStyle}
  margin-right: ${rem(10)};
`;

const FullscreenIcon = styled(Fullscreen)`
  ${iconStyle}
`;

const FullscreenOffIcon = styled(FullscreenOff)`
  ${iconStyle}
`;

const FlagFilledIcon = styled(FlagFilled)`
  width: ${rem(22)};
  margin-right: ${rem(10)};
  path {
    fill: ${core.color.status.negative};
  }
`;

export const Controls = Template.bind({});
Controls.storyName = 'Accordion';
