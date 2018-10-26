import React, { HTMLProps, SFC } from 'react';
import { ButtonLoadingStateProps as Props } from './ButtonLoadingStateTypes';
import { ButtonLoadingStateStyled } from './ButtonLoadingStateStyled';
import LoaderCircular from '../LoaderCircular/LoaderCircular';
import { Omit } from 'lodash';

const ButtonLoadingState: SFC<
    Props & Omit<HTMLProps<HTMLButtonElement>, 'size'>
> = ({
    children,
    icon,
    isLoading,
    onClick,
    ref: _,
    size = 'md',
    ...buttonProps
}) => (
    <ButtonLoadingStateStyled
        {...buttonProps}
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

export default ButtonLoadingState;
