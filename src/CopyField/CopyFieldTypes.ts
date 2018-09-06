export interface CopyFieldProps {
    buttonFormat?: 'subtle' | 'neutral' | 'strong';
    /**
     * ID shared by input and label
     */
    id: string;
    label: string;
    /**
     * Callback after successful copy
     */
    onCopy?: () => void;
    size?: 'md' | 'lg';
    stringToCopy: string;
    /**
     * Displayed on the bottom of screen after successful copy
     */
    successMessage: string;
    tooltipPosition: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Tooltip text, appears when hovering over copy icon
     */
    tooltipString: string;
}
