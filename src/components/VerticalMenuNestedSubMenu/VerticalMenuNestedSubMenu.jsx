// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuNestedSubMenu.scss';

const displayName = 'VerticalMenuNestedSubMenu';

type Props = {
    labeledById: string,
    onClick?: Function,
    onIndexChange: Function,
    selectedItemIndex: number,
    subMenuItems: Array<React$Element<'VerticalMenuItem' | 'VerticalMenuItemReactRouter'>>,
};

const VerticalMenuNestedSubMenu = ({
                        labeledById,
                        onClick,
                        onIndexChange,
                        selectedItemIndex,
                        subMenuItems,
                        ...filteredProps
                    }: Props): React$Element<*> => {


    const MenuItemsList = subMenuItems.map(function(key, i) {

        const _handleClick = (e) => {
            e.preventDefault();
            if (typeof onClick === 'function') {
                onClick(e);
            }
            if (typeof onIndexChange === 'function') {
                onIndexChange(i);
            }
        };

        const itemComponentClass = classNames(
            styles.VerticalMenuNestedSubMenuItem,
            styles.Link,
            (i === selectedItemIndex ? styles.isActive : null),
        );

        return (
            <li
                className={itemComponentClass}
                onClick={_handleClick}
                data-index={i}
                key={`submenu${i}`}
            >
                {subMenuItems[i]}
            </li>
        );

    });

    return (
            <ul
                {...filteredProps}
                aria-labelledby={labeledById}
                className={styles.VerticalMenuNestedSubMenu}
            >
                    {MenuItemsList}
            </ul>
    );
};

VerticalMenuNestedSubMenu.displayName = displayName;

export default VerticalMenuNestedSubMenu;
