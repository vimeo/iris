// @flow
import React from 'react';
import styles from './VerticalMenuContextualMenuPanel.scss';

import MenuPanel from '../MenuPanel/MenuPanel';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';
const displayName = 'VerticalMenuContextualMenuPanel';

type Props = {
    buttonElement: React$Element<*>,
    className?: string,
    children: React$Element<*>,
    tooltipText?: string,
    onClick?: Function,
    onClose?: Function,
    onOpen?: Function,
};

const VerticalMenuContextualMenuPanel = ({
    buttonElement,
    className,
    children,
    onClick,
    onClose,
    onOpen,
    tooltipText,
    ...filteredProps
}: Props): React$Element<*> => {

    const ButtonWithTooltip = (
        <TooltipOverlay
            tooltipText={tooltipText}
            element="span"
        >
            {buttonElement}
        </TooltipOverlay>
    );

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <MenuPanel
            {...filteredProps}
            className={styles.buttonOffset}
            alignment="left"
            menuContent={children}
            size="md"
            onClose={onClose}
            onClick={handleClick}
            onOpen={onOpen}
        >
            {tooltipText ? ButtonWithTooltip : buttonElement}
        </MenuPanel>
    );
};

VerticalMenuContextualMenuPanel.displayName = displayName;

export default VerticalMenuContextualMenuPanel;
