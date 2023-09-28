import React from 'react';
import { StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Button as B } from './Button';
import { Props } from './Button.types';
import { DownloadArrow } from '../../icons';

export default {
  title: 'components/Button',
  component: B,
  argTypes: {
    circular: { table: { disable: true } },
    overflow: { table: { disable: true } },
    href: { control: { disable: true } },
    icon: { control: { disable: true } },
    target: { control: { disable: true } },
    color: { control: 'color', type: 'color' },
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

const ButtonStyled = styled(B)`
  margin-bottom: 1rem;
  max-width: 10rem;
`;

const Template: StoryFn<Props> = ({ children, ...args }) => {
  return (
    <>
      <ButtonStyled size="md">{children}</ButtonStyled>
      <ButtonStyled icon={<DownloadArrow />} {...args}>
        {children}
      </ButtonStyled>
    </>
  );
};

export const Button = Template.bind({});
Button.args = {
  children: 'Button',
};
