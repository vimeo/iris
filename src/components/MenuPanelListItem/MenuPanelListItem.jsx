// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelListItem.scss';
import { ParagraphMd } from '../../utility_components/Type/Type';

const displayName = 'MenuPanelListItem';

type Props = {
    className?: string,
    label: string,
    href?: string,
};

const MenuPanelListItem = ({
        className,
        label,
        href = '#',
        ...menuItemProps
    }: Props): React$Element<*> => {

    const componentClass = classNames(
            styles.MenuPanelListItem,
    );

    const menuItemLinkClass = classNames(
        styles.MenuItemLink,
        className,
    );

    const onClick = (e) => {
        const thisLink = e.target.find(`a.${styles.MenuItemLink}`);

        if (thisLink instanceof HTMLElement) {
            thisLink.focus().click();
        }
    };

    return (
        <li className={componentClass} onClick={onClick}>
            <a
                href={href}
                className={menuItemLinkClass}
                {...menuItemProps}
            >
                <ParagraphMd
                    className={styles.MenuItemLabel}
                    element="span"
                >
                    {label}
                </ParagraphMd>
            </a>
        </li>
    );
};

MenuPanelListItem.displayName = displayName;

export default MenuPanelListItem;
