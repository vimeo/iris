import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import {
  ButtonProps,
  CustomFormatButton,
} from '../Button/ButtonTypes';
import { SocialButtonWrapper } from './SocialButtonWrapper';
import { SocialChipFacebook } from '../Icons';

const FacebookBlue = '#4267b2';

const FacebookFormat: CustomFormatButton = {
  defaultBackgroundColor: FacebookBlue,
  defaultBorderColor: FacebookBlue,
  defaultTextColor: '#fff',
  hoverBackgroundColor: '#2f579e',
};

const FacebookIcon = styled(SocialChipFacebook)`
  width: ${rem(25)};
  height: ${rem(25)};
  margin-left: ${rem(-4)};
  rect {
    display: none;
  }
  path {
    fill: ${FacebookBlue};
  }
`;

export const SocialButtonFacebook: SFC<ButtonProps> = ({
  ...props
}) => {
  return (
    <SocialButtonWrapper
      icon={<FacebookIcon />}
      customFormat={FacebookFormat}
      {...props}
    />
  );
};
