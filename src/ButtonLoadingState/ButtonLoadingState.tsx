import React, { SFC } from 'react';
import { ButtonLoadingStateProps as Props } from './ButtonLoadingStateTypes';
import { ButtonLoadingStateStyled } from './ButtonLoadingStateStyled';
import { LoaderCircular } from '../LoaderCircular/LoaderCircular';

export const ButtonLoadingState: SFC<Props> = ({
  children,
  icon,
  isLoading = false,
  onClick,
  size = 'md',
  ...props
}) => (
  <ButtonLoadingStateStyled
    {...props}
    size={size}
    onClick={isLoading ? event => event.preventDefault() : onClick}
    icon={isLoading ? null : icon}
  >
    {isLoading ? (
      <LoaderCircular size={size} format="adaptive" />
    ) : (
      children
    )}
  </ButtonLoadingStateStyled>
);
