import React from 'react';
import { ButtonIconOnlyStyledProps } from './ButtonIconOnlyStyled';

export interface ButtonIconOnlyProps
  extends ButtonIconOnlyStyledProps {
  icon: React.ReactNode;
  isButtonElement?: boolean;
}
