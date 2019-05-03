import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import {
  ButtonProps,
  CustomFormatButton,
} from '../Button/ButtonTypes';
import { SocialButtonWrapper } from './SocialButtonWrapper';
import { GoogleGColor } from '../Icons';

const GoogleBlue = '#4285f4';

const GoogleFormat: CustomFormatButton = {
  defaultBackgroundColor: GoogleBlue,
  defaultBorderColor: GoogleBlue,
  defaultTextColor: '#fff',
  hoverBackgroundColor: '#3367d6',
};

const GoogleIcon = styled(GoogleGColor)`
  width: ${rem(15)};
  height: ${rem(15)};
`;

export const SocialButtonGoogle: SFC<ButtonProps> = ({
  ...props
}) => {
  return (
    <SocialButtonWrapper
      icon={<GoogleIcon />}
      customFormat={GoogleFormat}
      {...props}
    />
  );
};
