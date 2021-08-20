import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';

import { Button as B } from './Button';
import { Props } from './Button.types';
import { DownloadArrow } from '../../icons';

export default {
  title: 'Components/Buttons/Button',
  component: B,
  argTypes: {
    circular: { table: { disable: true } },
    overflow: { table: { disable: true } },
    href: { control: { disable: true } },
    icon: { control: { disable: true } },
    target: { control: { disable: true } },
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

const Template: Story<Props> = (args) => {
  return (
    <>
      <ButtonStyled {...args} size="md">
        {args.children}
      </ButtonStyled>
      <ButtonStyled icon={<DownloadArrow />} {...args}>
        {args.children}
      </ButtonStyled>
    </>
  );
};

export const Button = Template.bind({});
Button.args = {
  children: 'Button',
};
