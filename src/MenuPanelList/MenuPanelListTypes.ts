import { MenuPanelListItemProps } from '../MenuPanelListItem/MenuPanelListItemTypes';

export interface WrapperStyledProps {
    hasDivider?: boolean;
}

export interface MenuPanelListProps {
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
    menuItems: Array<MenuPanelListItemProps>;
    /**
     * Color Scheme
     */
    theme?: 'dark' | 'light';
}
