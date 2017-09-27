// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelList.scss';
import MenuPanelListItem from '../MenuPanelListItem/MenuPanelListItem';
import { Header6 } from '../../utility_components/Type/Type';

const displayName = 'MenuPanelList';

type Props = {
    className?: string,
    hasDivider?: boolean,
    header?: string,
    menuItems: Array<{
            className: string,
            label: string,
            href: string,
            isSelected: boolean,
            icon: React$Element<*>,
    }>,
};

const MenuPanelList = ({
                        className,
                        hasDivider,
                        header,
                        menuItems,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.MenuPanelListWrapper,
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

    const menuHeader = <Header6 className={styles.Header}>{header}</Header6>;

    return (
            <div
                {...filteredProps}
                className={componentClass}
            >
                {header && menuHeader}
                <ul
                    className={styles.MenuPanelList}
                >
                        {menuList}
                </ul>
            </div>
    );
};

MenuPanelList.displayName = displayName;

export default MenuPanelList;
