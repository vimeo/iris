import React from 'react';

export interface SegmentedButtonSetOptionProps {
    id: string;
    /**
     * Shows up as the "button" label
     */
    optionLabel: React.ReactNode;
    /**
     * Pass any props (as an object) you wish to apply to the underlying radio input
     */
    inputProps?: React.HTMLProps<HTMLInputElement>;
}
export interface SegmentedButtonSetProps {
    /**
     * default: 'light', determines color format
     */
    format?: 'light' | 'dark';
    /**
     * Translated string to describe the fieldset. Required!
     */
    groupLabel: string;
    /**
     * The name attribute that should be passed to all of the radio button inputs to group them.
     */
    name: string;
    /**
     * See SegmentedButtonSetOptionProps
     */
    options: Array<SegmentedButtonSetOptionProps>;
    /**
     * Pass false to hide the group label.
     */
    showGroupLabel?: boolean;
}
