import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { Props, ItemPropsIntrinsic } from './Sidebar.types';

import {
  Gear,
  Lock,
  Interactive,
  SpeechBubbleSquared,
  LineChartOutlined,
  Eye,
} from '../../icons';
import { Header as H } from '../../typography';
import { Layout } from '../../storybook';

export default {
  title: 'components/Sidebar',
  component: Sidebar,
  argTypes: {
    state: { control: { disable: true } },
    labelAsTooltip: { control: 'boolean', defaultValue: true },
  },
};

const Header = styled(H)`
  margin-top: 0;
`;

const Template: Story<
  Props & Pick<ItemPropsIntrinsic, 'labelAsTooltip'>
> = ({ attach = 'left', labelAsTooltip, ...args }) => {
  const style =
    attach === 'right'
      ? ({ position: 'absolute', top: 0, right: 0 } as const)
      : null;
  return (
    <Layout.FullBleed>
      <Sidebar attach={attach} {...args} style={style}>
        <Sidebar.Item
          label="Privacy"
          labelAsTooltip={labelAsTooltip}
          icon={<Lock />}
        >
          <Header size="3">Privacy</Header>
        </Sidebar.Item>

        <Sidebar.Item
          label="Interactive"
          labelAsTooltip={labelAsTooltip}
          icon={<Interactive />}
        >
          <Header size="3">Interactive</Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item
          label="Comments"
          labelAsTooltip={labelAsTooltip}
          icon={<SpeechBubbleSquared />}
        >
          <Header size="3">Comments</Header>
        </Sidebar.Item>

        <Sidebar.Item
          label="Analytics"
          labelAsTooltip={labelAsTooltip}
          icon={<LineChartOutlined />}
        >
          <Header size="3">Analytics</Header>
        </Sidebar.Item>

        <Sidebar.Break />

        <Sidebar.Item
          label="Settings"
          labelAsTooltip={labelAsTooltip}
          icon={<Gear />}
        >
          <Header size="3">Settings</Header>
        </Sidebar.Item>

        <Sidebar.Item
          label="Configurações"
          labelAsTooltip={labelAsTooltip}
          icon={<Gear />}
        >
          <Header size="3">Configurações</Header>
        </Sidebar.Item>

        {!labelAsTooltip ? (
          <Sidebar.Item
            label="Longer Label"
            labelAsTooltip={false}
            icon={<Eye />}
          >
            <Header size="3">Long Label</Header>
          </Sidebar.Item>
        ) : (
          <></>
        )}
      </Sidebar>
    </Layout.FullBleed>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Sidebar';
