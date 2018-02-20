// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelListItem.scss';
import { ParagraphMd } from '../Type';
import SelectedIcon from '../icons/checkmark.svg';

const displayName = 'MenuPanelListItem';

type Props = {
    className?: string,
    label: string,
    href?: string,
    linkElement?: any,
    isSelected?: boolean,
    icon?: React$Element<*>,
};

const MenuPanelListItem = ({
        className,
        label,
        href = '#',
        linkElement,
        icon,
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

    const linkIconElement = icon ? (
        <span className={styles.LinkIcon}>
            {icon}
        </span>
    ) : null;

    const AnchorTag = (props) => {
        return (
                <a {...props} />
        );
    };

    const Element = linkElement || AnchorTag;

    return (
        <li className={componentClass}>
            <Element
                href={href}
                className={menuItemLinkClass}
                {...menuItemProps}
            >
                {isSelected && selectedIconElement}
                <ParagraphMd
                    className={styles.MenuItemLabel}
                    element="span"
                >
                    {linkIconElement}
                    {label}
                </ParagraphMd>
            </Element>
        </li>
    );
};

MenuPanelListItem.displayName = displayName;

export default MenuPanelListItem;
