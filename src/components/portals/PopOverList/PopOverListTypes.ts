import { PopOverListItemProps } from '../PopOverListItem/PopOverListItemTypes';

export interface WrapperStyledProps {
  hasDivider?: boolean;
}

export interface PopOverListProps {
  /**
   * Show a dividing line on top
   */
  hasDivider?: boolean;
  /**
   * Add a group header
   */
  header?: string;
  /**
   * An array of MenuListItem components
   */
  menuItems: PopOverListItemProps[];
  /**
   * Color Scheme
   */
  theme?: 'dark' | 'light';
}
