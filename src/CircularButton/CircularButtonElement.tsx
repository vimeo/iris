import React from 'react';
import { CircularButtonStyledProps } from './CircularButtonTypes';
import { Omit } from '../globals/js/type-helpers';

const  CircularButtonElement = ({
    element,
    ...filteredProps
}: CircularButtonStyledProps & Omit<React.HTMLProps<HTMLButtonElement>, 'size'>) => element === 'button'
    ? <button {...filteredProps} />
    : <span {...filteredProps} />;

export default CircularButtonElement;