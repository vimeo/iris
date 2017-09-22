// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelListItem.scss';
import { ParagraphMd } from '../../utility_components/Type/Type';
import SelectedIcon from '../../globals/svg/checkmark.svg';

const displayName = 'MenuPanelListItem';

type Props = {
    className?: string,
    label: string,
    href?: string,
    isSelected?: boolean,
};

const MenuPanelListItem = ({
        className,
        label,
        href = '#',
        isSelected,
        ...menuItemProps
    }: Props): React$Element<*> => {

    const componentClass = classNames(
            styles.MenuPanelListItem,
    );

    const menuItemLinkClass = classNames(
        styles.MenuItemLink,
        (isSelected ? styles.hasIcon : null),
        className,
    );

    const selectedIconElement = (
        <SelectedIcon className={styles.SelectedIcon} />
    );

    return (
        <li className={componentClass}>
            <a
                href={href}
                className={menuItemLinkClass}
                {...menuItemProps}
            >
                {isSelected && selectedIconElement}
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
