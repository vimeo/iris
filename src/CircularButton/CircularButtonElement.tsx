import React, { SFC } from 'react';
import { CircularButtonProps } from './CircularButtonTypes';

const CircularButtonElement: SFC<CircularButtonProps> = ({
    element,
    ...filteredProps
}) =>
    element === 'button' ? (
        <button {...filteredProps} />
    ) : (
        <span {...filteredProps} />
    );

export default CircularButtonElement;
