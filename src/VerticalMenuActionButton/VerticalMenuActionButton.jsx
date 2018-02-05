// @flow
import React from 'react';
import ButtonIconOnly from '../ButtonIconOnly';
import TooltipOverlay from '../TooltipOverlay';

const displayName = 'VerticalMenuActionButton';

type Props = {
    icon: React$Element<*>,
    tooltipText?: string,
};

const VerticalMenuActionButton = ({
    icon,
    tooltipText,
    ...filteredProps
}: Props): React$Element<*> => {

    const ActionButton = () => (
        <ButtonIconOnly
            {...filteredProps}
            autoSpacingHorizontal={false}
            format="dark"
            icon={icon}
            isButtonElement={false}
            size="sm"
        />
    );

    const TooltipWrappedActionButton = () => (
        <TooltipOverlay
            tooltipText={tooltipText}
            element="span"
        >
            <ActionButton />
        </TooltipOverlay>
    );

    return tooltipText ? (<TooltipWrappedActionButton />) : (<ActionButton />);
};

VerticalMenuActionButton.displayName = displayName;

export default VerticalMenuActionButton;
