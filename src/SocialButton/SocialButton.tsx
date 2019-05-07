import React, { SFC } from 'react';

import { ButtonProps } from '../Button/ButtonTypes';
import { SocialButtonWrapper } from './SocialButtonWrapper';
import * as Settings from './SocialButtonSettings';

interface SocialButtonProps extends ButtonProps {
  brand: 'facebook' | 'google';
}

export const SocialButton: SFC<SocialButtonProps> = ({
  brand,
  ...props
}) => {
  return (
    <SocialButtonWrapper
      icon={Settings.Icons[brand]}
      customFormat={Settings.Formats[brand]}
      {...props}
    />
  );
};
