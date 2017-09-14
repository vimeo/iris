// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelList.scss';
import MenuPanelListItem from '../MenuPanelListItem/MenuPanelListItem';

const displayName = 'MenuPanelList';

type Props = {
    className?: string,
    hasDivider?: boolean,
    menuItems: Array<{
            className: string,
            label: string,
            href: string,
    }>,
};

const MenuPanelList = ({
                        className,
                        hasDivider,
                        menuItems,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.MenuPanelList,
        (hasDivider ? styles.hasDivider : null),
        className
    );

    const menuList = [];

    if (menuItems) {
        menuItems.map(function(key, i) {
            const thisMenuItem = menuItems[i];

            menuList.push(
                <MenuPanelListItem {...thisMenuItem} key={i} />
            );
        });
    }

    return (
            <ul
                {...filteredProps}
                className={componentClass}
            >
                    {menuList}
            </ul>
    );
};

MenuPanelList.displayName = displayName;

export default MenuPanelList;
