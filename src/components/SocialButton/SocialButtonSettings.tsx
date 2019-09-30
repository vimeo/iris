import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { CustomFormatButton } from '../Button/ButtonTypes';
import { SocialChipFacebook, GoogleGColor } from '../../icons';

const FacebookBlue = '#4267b2';

const FacebookFormat: CustomFormatButton = {
  defaultBackgroundColor: FacebookBlue,
  defaultBorderColor: FacebookBlue,
  defaultTextColor: '#fff',
  hoverBackgroundColor: '#2f579e',
};

const FacebookIcon = styled(SocialChipFacebook)`
  width: ${rem(22)};
  height: ${rem(22)};
  margin-left: ${rem(-6)};
  rect {
    display: none;
  }
  path {
    fill: ${FacebookBlue};
  }
`;

const GoogleBlue = '#4285f4';

const GoogleIcon = styled(GoogleGColor)`
  width: ${rem(15)};
  height: ${rem(15)};
`;

const GoogleFormat: CustomFormatButton = {
  defaultBackgroundColor: GoogleBlue,
  defaultBorderColor: GoogleBlue,
  defaultTextColor: '#fff',
  hoverBackgroundColor: '#3367d6',
};

export const Icons = {
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
};

export const Formats = {
  google: GoogleFormat,
  facebook: FacebookFormat,
};
