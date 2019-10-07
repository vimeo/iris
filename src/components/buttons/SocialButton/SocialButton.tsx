import React from 'react';

import { IrisComponent } from '../../../utils';
import { ButtonProps } from '../Button/ButtonTypes';
import { SocialButtonWrapper } from './SocialButtonWrapper';
import { Icons, Formats } from './SocialButtonSettings';

interface SocialButtonProps extends ButtonProps {
  brand: 'facebook' | 'google';
}

export const SocialButton: IrisComponent<SocialButtonProps> = ({
  brand,
  ...props
}) => {
  return (
    <SocialButtonWrapper
      icon={Icons[brand]}
      customFormat={Formats[brand]}
      {...props}
    />
  );
};
