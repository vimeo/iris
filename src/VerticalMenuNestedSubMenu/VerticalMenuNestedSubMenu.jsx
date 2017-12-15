// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuNestedSubMenu.scss';

const displayName = 'VerticalMenuNestedSubMenu';

type Props = {
    labeledById: string,
    onClick?: Function,
    subMenuItems: Array<React$Element<'VerticalMenuItem' | 'VerticalMenuItem'>>,
};

const VerticalMenuNestedSubMenu = ({
                        labeledById,
                        onClick,
                        subMenuItems,
                        ...filteredProps
                    }: Props): React$Element<*> => {


    const MenuItemsList = subMenuItems.map(function(key, i) {

        const _handleClick = (e) => {
            e.preventDefault();
            if (typeof onClick === 'function') {
                onClick(e);
            }
        };

        const itemComponentClass = classNames(
            styles.VerticalMenuNestedSubMenuItem,
            styles.Link,
        );

        return (
            <li
                className={itemComponentClass}
                onClick={_handleClick}
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
