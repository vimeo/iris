import React from 'react';

export interface MenuPanelListItemThemes {
    theme?: 'light' | 'dark';
}

export interface MenuPanelListItemProps extends MenuPanelListItemThemes {
    className?: string;
    label: string;
    href?: string;
    linkElement?: any;
    isSelected?: boolean;
    icon?: React.Component<any>;
}
