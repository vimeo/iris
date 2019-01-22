import React, { SFC, HTMLProps } from 'react';
import { Notification } from '../Notification/Notification';
import InfoIcon from '../icons/circle-info.svg';

export const NotificationNeutral: SFC<
    { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...props }) => (
    <Notification
        icon={hasIcon ? <InfoIcon /> : null}
        variant="neutral"
        {...props}
    >
        {children}
    </Notification>
);
