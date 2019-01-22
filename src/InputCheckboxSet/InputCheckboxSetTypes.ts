// import { InputCheckboxProps } from '../InputCheckbox/InputCheckboxTypes';

export interface InputCheckboxSetProps {
    /**
     * Array of prop objects , each member of the Array will create a sub-level checkbox (see prop API for InputCheckbox)
     */
    subOptions: any[]; // InputCheckboxProps[],
    topLevelCheckedStyle?: 'default' | 'indeterminate';
    /**
     * Prop object that will be assigned to the topLevel checkbox (see prop API for InputCheckbox)
     */
    topLevel: any; // InputCheckboxProps,
    showDisabledOptions?: boolean;
    checkAllOnTopLevelCheck: boolean;
}

export interface InputCheckboxSetState {
    topLevelChecked: boolean;
    topLevelStyle: 'default' | 'indeterminate';
    checkboxState: boolean[];
    isHovered: boolean;
    showSubOptions: boolean;
}
