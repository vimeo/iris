// import { CheckboxProps } from '../Checkbox/CheckboxTypes';

export interface CheckboxSetProps {
  /**
   * Array of prop objects , each member of the Array will create a sub-level checkbox (see prop API for Checkbox)
   */
  subOptions: any[]; // CheckboxProps[],
  topLevelCheckedStyle?: 'default' | 'indeterminate';
  /**
   * Prop object that will be assigned to the topLevel checkbox (see prop API for Checkbox)
   */
  topLevel: any; // CheckboxProps,
  showDisabledOptions?: boolean;
  checkAllOnTopLevelCheck: boolean;
}

export interface CheckboxSetState {
  topLevelChecked: boolean;
  topLevelStyle: 'default' | 'indeterminate';
  checkboxState: boolean[];
  isHovered: boolean;
  showSubOptions: boolean;
}
