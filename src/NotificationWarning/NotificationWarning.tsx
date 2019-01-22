import React, { SFC, HTMLProps } from 'react';
import { Notification } from '../Notification/Notification';
import WarningIcon from '../Icons/circle-warning.svg';

export const NotificationWarning: SFC<
    { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...props }) => (
    <Notification
        icon={hasIcon ? <WarningIcon /> : null}
        variant="warning"
        {...props}
    >
        {children}
    </Notification>
);
