import React, { SFC, HTMLProps } from 'react';
import { Notification } from '../Notification/Notification';
import SuccessIcon from '../icons/checkmark.svg';

export const NotificationSuccess: SFC<
    { hasIcon?: boolean } & HTMLProps<HTMLDivElement>
> = ({ children, hasIcon = true, ...props }) => (
    <Notification
        icon={hasIcon ? <SuccessIcon /> : null}
        variant="success"
        {...props}
    >
        {children}
    </Notification>
);
