import React, { ReactNode, SFC } from 'react';
import ButtonIconOnly from '../ButtonIconOnly';
import TooltipOverlay from '../TooltipOverlay';
import { TooltipOverlayProps } from '../TooltipOverlay/TooltipOverlay';

interface Props {
    icon: ReactNode;
    tooltipText?: string;
    tooltipProps?: TooltipOverlayProps;
}

const VerticalMenuActionButton: SFC<Props> = ({
    icon,
    tooltipText,
    tooltipProps,
    ...props
}) =>
    tooltipText ? (
        <TooltipOverlay tooltipText={tooltipText} {...tooltipProps}>
            <ButtonIconOnly
                {...props}
                autoSpacingHorizontal={false}
                format="dark"
                icon={icon}
                isButtonElement={false}
                size="sm"
            />
        </TooltipOverlay>
    ) : (
        <ButtonIconOnly
            {...props}
            autoSpacingHorizontal={false}
            format="dark"
            icon={icon}
            isButtonElement={false}
            size="sm"
        />
    );

export default VerticalMenuActionButton;
