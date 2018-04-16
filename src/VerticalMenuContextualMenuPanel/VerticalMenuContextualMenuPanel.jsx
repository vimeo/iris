// @flow
import React from 'react';
import styles from './VerticalMenuContextualMenuPanel.scss';
// $FlowFixMe flow hates TS!
import MenuPanel from '../MenuPanel/MenuPanel';
// $FlowFixMe
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
    size?: 'sm' | 'md' | 'lg',
};

const VerticalMenuContextualMenuPanel = ({
    buttonElement,
    className,
    children,
    onClick,
    onClose,
    onOpen,
    size = 'md',
    tooltipText,
    ...filteredProps
}: Props): React$Element<*> => {
    const ButtonWithTooltip = (
        <TooltipOverlay tooltipText={tooltipText}>
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
            className={styles.VerticalMenuContextualMenuPanel}
            alignment="left"
            menuContent={children}
            size={size}
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
