import React from 'react';
import { CircularButtonProps } from './CircularButtonTypes';

const  CircularButtonElement = ({
    element,
    ...filteredProps
}: CircularButtonProps & React.HTMLProps<HTMLElement>) => element === 'button'
    ? <button {...filteredProps} />
    : <span {...filteredProps} />;

export default CircularButtonElement;