// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuContextualMenuPanel.scss';
import DotsMenuIcon from '../../globals/svg/dots-menu.svg';
import MenuPanel from '../MenuPanel/MenuPanel';
import ButtonIconOnly from '../ButtonIconOnly/ButtonIconOnly';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';
const displayName = 'VerticalMenuContextualMenuPanel';

type Props = {
    className?: string,
    children: React$Element<*>,
    tooltipText: string,
};

const VerticalMenuContextualMenuPanel = ({
    className,
    children,
    tooltipText,
    ...filteredProps
}: Props): React$Element<*> => {

    const componentClass = classNames(
        styles.buttonOffset,
        className,
    );

    return (
        <div className={componentClass}>
            <MenuPanel
                alignment="left"
                menuContent={children}
                size="md"
                className={componentClass}
            >
                <TooltipOverlay
                    tooltipText={tooltipText}
                    element="span"
                >
                    <ButtonIconOnly
                        icon={<DotsMenuIcon />}
                        format="dark"
                        size="sm"
                        isButtonElement={false}
                        className={styles.Button}
                    />
                </TooltipOverlay>
            </MenuPanel>
        </div>
    );
};

VerticalMenuContextualMenuPanel.displayName = displayName;

export default VerticalMenuContextualMenuPanel;
