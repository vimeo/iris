import React from 'react';

export interface InputRadioSetProps {
    disabled?: boolean;
    id: string;
    name: string;
    radios: Array<{
        label: string | React.ReactNode,
        id: string,
        value: string}>;
};
