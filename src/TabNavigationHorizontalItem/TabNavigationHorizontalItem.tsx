import React, { SFC, MouseEventHandler } from 'react';
import Button from '../Button/Button';

interface Props {
    handleTabChange: MouseEventHandler;
    isSelected: boolean;
    label: string;
    onClick?: MouseEventHandler;
    tabId: string;
}

const TabNavigationHorizontalItem: SFC<Props> = ({
    handleTabChange,
    isSelected,
    onClick,
    tabId,
    label,
    ...filteredProps
}) => (
    <li style={{ flex: '1 0 0' }}>
        <a
            {...filteredProps}
            id={`tab-${tabId}`}
            aria-selected={isSelected ? 'true' : 'false'}
            href={`#${tabId}`}
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                handleTabChange(e);
                if ('function' === typeof onClick) {
                    onClick(e);
                }
            }}
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

export default TabNavigationHorizontalItem;
