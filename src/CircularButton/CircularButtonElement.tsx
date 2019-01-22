import React, { SFC } from 'react';
import { CircularButtonProps } from './CircularButtonTypes';

export const CircularButtonElement: SFC<CircularButtonProps> = ({
    element,
    ...props
}) => (element === 'button' ? <button {...props} /> : <span {...props} />);
