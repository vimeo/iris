// @flow
import React from 'react';
import styles from './TabNavigationHorizontalItem.scss';
import Button from '../Button/Button';

const displayName = 'TabNavigationHorizontalItem';

type Props = {
    className?: string,
    handleTabChange: Function,
    isSelected: boolean,
    label: string,
    onClick?: Function,
    tabId: string,
};

const TabNavigationHorizontalItem = ({
                        className,
                        handleTabChange,
                        isSelected,
                        onClick,
                        tabId,
                        label,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const handleClick = (e: Event) => {
        e.preventDefault();
        handleTabChange();

        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <li
            className={styles.TabNavigationHorizontalItem}
        >
            <a
                {...filteredProps}
                id={`tab-${tabId}`}
                aria-selected={isSelected ? 'true' : 'false'}
                href={`#${tabId}`}
                onClick={handleClick}
            >
                <Button
                    autoWidth="fluid"
                    format="secondaryTextOnly"
                    isButtonElement={false}
                    isInline
                    size="md"
                >
                    {label}
                </Button>
            </a>
        </li>
    );
};

TabNavigationHorizontalItem.displayName = displayName;

export default TabNavigationHorizontalItem;
