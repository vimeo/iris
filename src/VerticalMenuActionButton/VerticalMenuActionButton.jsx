// @flow
import React from 'react';
import ButtonIconOnly from '../ButtonIconOnly';
import TooltipOverlay from '../TooltipOverlay';

const displayName = 'VerticalMenuActionButton';

type Props = {
    icon: React$Element<*>,
    tooltipText?: string,
    tooltipProps?: Object,
};

const VerticalMenuActionButton = ({
    icon,
    tooltipText,
    tooltipProps,
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
        <TooltipOverlay tooltipText={tooltipText} {...tooltipProps}>
            <ActionButton />
        </TooltipOverlay>
    );

    const VerticalMenuActionButtonElement = tooltipText
        ? TooltipWrappedActionButton
        : ActionButton;

    return <VerticalMenuActionButtonElement />;
};

VerticalMenuActionButton.displayName = displayName;

export default VerticalMenuActionButton;
