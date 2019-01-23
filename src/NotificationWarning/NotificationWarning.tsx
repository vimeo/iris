import React, { SFC, HTMLProps } from 'react';
import { Notification } from '../Notification/Notification';
import { CircleWarning } from '../Icons';

export const NotificationWarning: SFC<
    { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...props }) => (
    <Notification
        icon={hasIcon ? <CircleWarning /> : null}
        variant="warning"
        {...props}
    >
        {children}
    </Notification>
);
