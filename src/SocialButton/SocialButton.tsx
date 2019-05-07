import React from 'react';

import { IrisComponent } from '../Utils';
import { ButtonProps } from '../Button/ButtonTypes';
import { SocialButtonWrapper } from './SocialButtonWrapper';
import * as Settings from './SocialButtonSettings';

interface SocialButtonProps extends ButtonProps {
  brand: 'facebook' | 'google';
}

export const SocialButton: IrisComponent<SocialButtonProps> = ({
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
